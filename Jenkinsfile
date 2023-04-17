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
                bat 'ng test --watch=false && echo "success" || mail bcc: "", body: "Hello from Jenkins", cc: "", from: "", replyTo: "", subject: "Jenkins Job", to: "jenkinstest14@gmail.com" echo "Failed success"'
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
                bat 'xcopy /s /y "C:/Users/allsh/AppData/Local/Jenkins/.jenkins/workspace/TestPipeline/dist/test-project" "C:/Users/allsh/OneDrive/Desktop/Release"'
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