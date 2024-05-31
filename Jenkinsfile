pipeline {
    agent any
    environment {
        DOCKER_HUB_CREDENTIALS = credentials('dockerhub')
        DOCKER_HUB_CREDENTIALS_USR = binding.variables.get('DOCKER_HUB_CREDENTIALS_USR') ?: "${DOCKER_HUB_CREDENTIALS_USR}"
        DOCKER_HUB_CREDENTIALS_PSW = binding.variables.get('DOCKER_HUB_CREDENTIALS_PSW') ?: "${DOCKER_HUB_CREDENTIALS_PSW}"
    }
    stages {
        stage('Checkout') {
            steps {
                // Checkout code from the repository
                git branch: 'main', url: 'https://github.com/K200265-Insia-Farhan/SkillsMatch2.git'
            }
        }
        stage('Build Docker Images') {
            steps {
                script {
                    // Build Docker images
                    sh """
                        docker build -t insiafarhan/skillsmatch1:frontend7 frontend
                        docker build -t insiafarhan/skillsmatch1:backend7 backend
                        docker build -t insiafarhan/skillsmatch1:jobimage7 Job
                    """
                }
            }
        }
        stage('Push Docker Images') {
            steps {
                script {
                    // Docker login and push Docker images
                    sh """
                        echo ${DOCKER_HUB_CREDENTIALS_PSW} | docker login -u ${DOCKER_HUB_CREDENTIALS_USR} --password-stdin
                        docker push insiafarhan/skillsmatch1:frontend7
                        docker push insiafarhan/skillsmatch1:backend7
                        docker push insiafarhan/skillsmatch1:jobimage7
                    """
                }
            }
        }
        stage('Pull Docker Images') {
            steps {
                script {
                    // Docker login and pull Docker images
                    sh """
                        echo ${DOCKER_HUB_CREDENTIALS_PSW} | docker login -u ${DOCKER_HUB_CREDENTIALS_USR} --password-stdin
                        docker pull insiafarhan/skillsmatch1:frontend7
                        docker pull insiafarhan/skillsmatch1:backend7
                        docker pull insiafarhan/skillsmatch1:jobimage7
                    """
                }
            }
        }
    }
}
