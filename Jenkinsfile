pipeline {
    agent any
    stages {
        stage('install dependecies'){
            steps {
                echo 'Installing Dependencies'
                bat 'npm install'
            }
        }

        stage('Testing Project'){
            steps {
                echo 'Testing Project'
                bat 'ng test --watch=false && echo "success" || mail bcc: "", body: "Hello from Jenkins", cc: "", from: "", replyTo: "", subject: "Jenkins Job", to: "jenkinstest14@gmail.com" echo "Failed success"'
            }

            post{
            success {
                echo 'success'
            }
            failure {
                echo 'failure written by us'
            }
        }
        }


        stage('Building Project'){
            steps {
                echo 'Building Project'
                bat 'npm run ng -- build'
            }
        }

        stage('Deploy Project'){
            steps {
                echo 'Deploy Project'
                bat 'xcopy /s /y "C:/Users/allsh/AppData/Local/Jenkins/.jenkins/workspace/TestPipeline/dist/test-project" "C:/Users/allsh/OneDrive/Desktop/Release"'
            }
        }

        stage('Email'){
            steps {
                mail bcc: '', body: 'Hello from Jenkins', cc: '', from: '', replyTo: '', subject: 'Jenkins Job', to: 'jenkinstest14@gmail.com'

            }
            
        }

        

    }
}