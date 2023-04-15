pipeline {
    agent any
    stages {
        stage('install dependecies'){
            steps {
                echo 'Installing Dependencies'
                bat 'npm install'
            }
        }

        stage('Building Project'){
            steps {
                echo 'Building Project'
                bat 'npm run ng -- build'
            }
        }
    }
}