pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS_ID = 'dockerhub'
        KUBECONFIG_CREDENTIALS_ID = 'kubeconfig'
        GIT_REPO_URL = 'https://github.com/K200265-Insia-Farhan/SkillsMatch2.git'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: env.GIT_REPO_URL, branch: 'main'
            }
        }
        stage('Build Frontend Docker Image') {
            steps {
                script {
                    dir('frontend') {
                        sh 'docker build -t insiafarhan/skillsmatch:frontend5 .'
                    }
                }
            }
        }
        stage('Build Backend Docker Image') {
            steps {
                script {
                    dir('backend') {
                        sh 'docker build -t insiafarhan/skillsmatch:backend5 .'
                    }
                }
            }
        }
        stage('Build Job Docker Image') {
            steps {
                script {
                    dir('Job') {
                        sh 'docker build -t insiafarhan/skillsmatch:jobimage5 .'
                    }
                }
            }
        }
        stage('Docker Login and Push') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_CREDENTIALS_ID) {
                        sh 'docker push insiafarhan/skillsmatch:frontend5'
                        sh 'docker push insiafarhan/skillsmatch:backend5'
                        sh 'docker push insiafarhan/skillsmatch:jobimage5'
                    }
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    withCredentials([file(credentialsId: KUBECONFIG_CREDENTIALS_ID, variable: 'KUBECONFIG')]) {
                        sh 'kubectl set image deployment/frontenddeploy skillsmatch=insiafarhan/skillsmatch:frontend5'
                        sh 'kubectl set image deployment/backenddeploy skillsmatch=insiafarhan/skillsmatch:backend5'
                        sh 'kubectl set image deployment/jobdeploy skillsmatch=insiafarhan/skillsmatch:jobimage5'
                    }
                }
            }
        }
    }
}
 
