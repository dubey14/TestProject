pipeline {
    agent any
    stages {
        stage('install dependecies'){
            steps {
                echo 'Installing Dependencies'
                bat 'npm install'
            }
        }

        stage('Running Tests'){
            steps {
                echo 'Running Tests'
                bat 'ng test'
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
    }
}