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
                    dir('SkillsMatch/frontend') {
                        sh '''
                        #!/bin/bash
                        sudo docker build -t insiafarhan/skillsmatch:frontend5 .
                        '''
                    }
                }
            }
        }
        stage('Build Backend Docker Image') {
            steps {
                script {
                    dir('SkillsMatch/backend') {
                        sh '''
                        #!/bin/bash
                        sudo docker build -t insiafarhan/skillsmatch:backend5 .
                        '''
                    }
                }
            }
        }
        stage('Build Job Docker Image') {
            steps {
                script {
                    dir('SkillsMatch/Job') {
                        sh '''
                        #!/bin/bash
                        sudo docker build -t insiafarhan/skillsmatch:jobimage5 .
                        '''
                    }
                }
            }
        }
        stage('Docker Login and Push') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh 'echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin'
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
                        sh 'kubectl set image deployment/frontenddeploy skillsmatch1=insiafarhan/skillsmatch:frontend5'
                        sh 'kubectl set image deployment/backenddeploy skillsmatch1=insiafarhan/skillsmatch:backend5'
                        sh 'kubectl set image deployment/jobdeploy skillsmatch1=insiafarhan/skillsmatch:jobimage5'
                    }
                }
            }
        }
    }
}
