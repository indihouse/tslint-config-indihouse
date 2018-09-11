pipeline {
  agent none
  stages {
    stage('Prepare workspace') {
      agent {
        docker {
          image 'artifactory.sigfox.io/docker-sigfox/tools/ci/agent/node-sigfox:10.1.0'
          registryCredentialsId 'artifactory-reader'
          alwaysPull true
          reuseNode true
        }
      }
      steps {
        script {
          def commitMsg = sh returnStdout: true, script: "git log -1 --pretty=%B | head -1  | tr -d '\n'"
          if(commitMsg ==~ /v[0-9]+\.[0-9]+\.[0-9]+/) {
            // This is a bump version commit, abort
            currentBuild.result = 'ABORTED'
            error('Last commit bumped the version, aborting the build.')
          }
          env.GIT_COMMIT_MESSAGE = commitMsg
        }
        withCredentials([file(credentialsId: 'npm-artifactory', variable: 'npmrc')]) {
              sh "cp ${npmrc} .npmrc"
        }
      }
      post {
        failure {
          cleanWs()
        }
      }
    }
    stage('Install dependencies') {
      agent {
        docker {
          image 'artifactory.sigfox.io/docker-sigfox/tools/ci/agent/node-sigfox:10.1.0'
          registryCredentialsId 'artifactory-reader'
          alwaysPull true
          reuseNode true
        }
      }
      steps {
        sh 'rm -rf node_modules' // Just in case
        sh 'yarn install'
      }
      post {
        failure {
          cleanWs()
        }
      }
    }
    stage('Choose new version'){
      agent none
      when {
        branch 'master'
      }
      steps {
        script {
          def version = 'patch'
          if(!(env.GIT_COMMIT_MESSAGE ==~ /[M|m]erge.*bugfix\/[\w-]+ to master/)) {
            // Not a bugfix merge, ask for version
            version = input message: '"Deploy lib ?"', parameters: [choice(choices: 'minor\nmajor\npatch', description: 'New version to be deployed', name: 'DEPLOY_VERSION')]
          }
          if(version != 'major' && version != 'minor' && version != 'patch'){
            currentBuild.result = "ABORTED"
            error "User cancelled"
          }
          env.DEPLOY_VERSION = version
        }
      }
    }
    stage('Deploy') {
      agent {
        docker {
          image 'artifactory.sigfox.io/docker-sigfox/tools/ci/agent/node-sigfox:10.1.0'
          alwaysPull true
          registryCredentialsId 'artifactory-reader'
          reuseNode true
        }
      }
      when {
        branch 'master'
      }
      steps {
        // Configure git
        sh "git config user.name 'CGLO Jenkins'"
        sh "git config user.email cglo-jenkins@sigfox.com"
        sh "git checkout ${BRANCH_NAME}"
        // Update version
        sh "yarn version --no-commit-hooks --new-version ${env.DEPLOY_VERSION}"
        sh "git status"
        // Pack
        sh "npm pack" // Use npm instead of yarn to avoid prefix and run prepublish scripts
        // Artifactory build info
        script {
          def server = Artifactory.server 'artifactory-sigfox'
          def uploadSpec = readFile 'resources/upload-spec.json'
          def buildInfo = server.upload spec: uploadSpec
          buildInfo.env.collect()
          server.publishBuildInfo buildInfo
        }
        //Push git modif
        withCredentials([usernamePassword(credentialsId: 'fbois_bit', passwordVariable: 'gitPass', usernameVariable: 'gitUser')]) {
          sh "git push https://${gitUser}:${gitPass}@bitbucket.sigfox.com/scm/cdop/tslint-config-sigfox.git"
          sh "git push https://${gitUser}:${gitPass}@bitbucket.sigfox.com/scm/cdop/tslint-config-sigfox.git --tag"
        }
      }
      post {
        failure {
          cleanWs()
        }
      }
    }
    stage('Clean workspace') {
      agent {
        docker {
          image 'artifactory.sigfox.io/docker-sigfox/tools/ci/agent/node-sigfox:10.1.0'
          alwaysPull true
          registryCredentialsId 'artifactory-reader'
          reuseNode true
        }
      }
      steps {
        cleanWs()
      }
    }
  }
}