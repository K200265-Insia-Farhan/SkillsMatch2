pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Checkout code from the repository
                script {
                    git branch: 'main', url: 'https://github.com/K200265-Insia-Farhan/SkillsMatch2.git'
                }
            }
        }
        stage('Build Docker Images') {
            steps {
                script {
                    // Change directory to frontend and build Docker image
                    sh "docker build -t insiafarhan/skillsmatch1:frontend7 frontend"
                    sh "docker build -t insiafarhan/skillsmatch1:backend7 backend"
                    sh "docker build -t insiafarhan/skillsmatch1:jobimage7 Job"
                }
            }
        }
        stage('Push Docker Images') {
            steps {
                script {
                    // Push the Docker image to Docker Hub or your Docker registry
                    sh "docker login -u insiafarhan -p 123456789"
                    sh "docker push insiafarhan/skillsmatch1:frontend7"
                    sh "docker push insiafarhan/skillsmatch1:backend7"
                    sh "docker push insiafarhan/skillsmatch1:jobimage7"
                }
            }
        }
        
        stage('Pull Docker Images') {
            steps {
                script {
                    // Push the Docker image to Docker Hub or your Docker registry
                    sh "docker login -u insiafarhan -p 123456789"
                    sh "docker pull insiafarhan/skillsmatch1:frontend7"
                    sh "docker pull insiafarhan/skillsmatch1:backend7"
                    sh "docker pull insiafarhan/skillsmatch1:jobimage7"
                }
            }
        }
    }
}
