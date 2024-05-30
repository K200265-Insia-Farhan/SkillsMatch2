pipeline {
    agent any
    
    environment {
        DOCKER_HUB_CREDENTIALS_ID = 'dockerhub' // Updated credentials ID
        DOCKER_HUB_REPO = 'insiafarhan/skillsmatch2'
        DOCKER_IMAGE_TAG = 'frontendimage5'
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout code from the repository
                git branch: 'main', url: 'https://github.com/K200265-Insia-Farhan/SkillsMatch2.git'
            }
        }
        stage('Navigate to Code Directory') {
            steps {
                script {
                    // Change directory to where the code has been cloned
                    dir('SkillsMatch2') {
                        // Print contents of the current directory for verification
                        bat 'dir'
                    }
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Change directory to frontend directory
                    dir('SkillsMatch2/frontend') {
                        // Build Docker image using Dockerfile
                        docker.build("${env.DOCKER_HUB_REPO}:${env.DOCKER_IMAGE_TAG}")
                    }
                }
            }
        }
        stage('Login to Docker Hub') {
            steps {
                script {
                    // Login to Docker Hub using credentials
                    docker.withRegistry('https://index.docker.io/v1/', env.DOCKER_HUB_CREDENTIALS_ID) {
                        // No operation needed here, as withRegistry handles the login
                    }
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    // Push the Docker image to Docker Hub
                    docker.withRegistry('https://index.docker.io/v1/', env.DOCKER_HUB_CREDENTIALS_ID) {
                        docker.image("${env.DOCKER_HUB_REPO}:${env.DOCKER_IMAGE_TAG}").push()
                    }
                }
            }
        }
        // Add more stages as needed
    }
}


}
 
