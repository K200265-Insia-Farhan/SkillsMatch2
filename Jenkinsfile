pipeline {
    agent any

    environment {
        KUBECONFIG_CREDENTIALS_ID = 'kubeconfig'
        DOCKER_CREDENTIALS_ID = 'dockerhub'
        GIT_REPO_URL = 'https://github.com/K200265-Insia-Farhan/SkillsMatch2.git'
    }

    stages {
        stage('Clone Git Repository') {
            steps {
                git url: env.GIT_REPO_URL, branch: 'main'
            }
        }

        stage('Build and Push Docker Images') {
            steps {
                script {
                    dir('SkillsMatch2/frontend') {
                        sh 'sudo docker build -t insiafarhan/skillsmatch:frontend5 .'
                        sh 'sudo docker push insiafarhan/skillsmatch:frontend5'
                    }
                    dir('SkillsMatch2/backend') {
                        sh 'sudo docker build -t insiafarhan/skillsmatch:backend5 .'
                        sh 'sudo docker push insiafarhan/skillsmatch:backend5'
                    }
                    dir('SkillsMatch2/Job') {
                        sh 'sudo docker build -t insiafarhan/skillsmatch:jobimage5 .'
                        sh 'sudo docker push insiafarhan/skillsmatch:jobimage5'
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
