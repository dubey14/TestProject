pipeline {
    agent any
    stages {
        stage('install dependecies'){
            steps {
                script {
                    FAILED_STAGE=env.STAGE_NAME
                }
                echo 'Installing Dependencies'
                bat 'npm install'
            }
        }

        stage('Testing Project'){
            steps {
                script {
                    FAILED_STAGE=env.STAGE_NAME
                }
                echo 'Testing Project'
                bat 'ng test --watch=false'
                post {
                  failure {
                     echo "Failed stage name: ${FAILED_STAGE}"
                     mail bcc: '', body: 'Hello from Jenkins Failed stage name: ${FAILED_STAGE}', cc: '', from: '', replyTo: '', subject: 'Jenkins Job', to: 'jenkinstest14@gmail.com'
                }
              }
            }
        }

        stage('Building Project'){
            steps {
                script {
                    FAILED_STAGE=env.STAGE_NAME
                }
                echo 'Building Project'
                bat 'npm run ng -- build'
            }
        }

        stage('Deploy Project'){
            steps {
                script {
                    FAILED_STAGE=env.STAGE_NAME
                }
                echo 'Deploy Project'
                bat 'xcopy /s /y "C:/Users/allsh/AppData/Local/Jenkins/.jenkins/workspace/TestPipeline/dist/test-project" "C:/Users/allsh/OneDrive/Desktop/Release"'
            }
        }

        stage('Email'){
            steps {
               post {
                  failure {
                     echo "Failed stage name: ${FAILED_STAGE}"
                     mail bcc: '', body: 'Hello from Jenkins Failed stage name: ${FAILED_STAGE}', cc: '', from: '', replyTo: '', subject: 'Jenkins Job', to: 'jenkinstest14@gmail.com'
                }
              }
            }
        }

    }
}