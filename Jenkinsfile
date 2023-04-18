pipeline {
    agent any
    stages {
        stage('install dependecies'){
            steps {
                echo 'Installing Dependencies'
                bat 'npm install'
            }
            post{
            success {
                echo 'Dependcy installation successful'
            }
            failure {
                mail bcc: '', body: 'Stage: "Installing dependecies" failed!', cc: '', from: '', replyTo: '', subject: 'Jenkins Job', to: 'jenkinstest14@gmail.com'
            }
            }
        }

        stage('Testing Project'){
            steps {
                echo 'Testing Project'
                bat 'npm run ng -- test --watch false'
            }

            post{
            success {
                echo 'success'
            }
            failure {
                mail bcc: '', body: 'Stage: "Testing Project" failed!', cc: '', from: '', replyTo: '', subject: 'Jenkins Job', to: 'jenkinstest14@gmail.com'
            }
            }
        }
        


        stage('Building Project'){
            steps {
                echo 'Building Project'
                bat 'npm run ng -- build'
            }
            post{
            success {
                echo 'success'
            }
            failure {
                mail bcc: '', body: 'Stage: "Building Project" failed!', cc: '', from: '', replyTo: '', subject: 'Jenkins Job', to: 'jenkinstest14@gmail.com'
            }
        }
        }

        stage('Deploy Project'){
            steps {
                echo 'Deploy Project'
                bat 'xcopy /s /y "C:/ProgramData/Jenkins/.jenkins/workspace/DevOpsPipeline/dist/test-project" "C:/Users/c0870021/Desktop/Release"'
            }
            post{
            success {
                mail bcc: '', body: 'Deployment successful. Reload the website and check!', cc: '', from: '', replyTo: '', subject: 'Jenkins Job', to: 'jenkinstest14@gmail.com'
            }
            failure {
                mail bcc: '', body: 'Stage: "Deploying Project" failed!', cc: '', from: '', replyTo: '', subject: 'Jenkins Job', to: 'jenkinstest14@gmail.com'
            }
            }
        }     

    }
}