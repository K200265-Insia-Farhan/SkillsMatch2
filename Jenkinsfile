pipeline {
    agent any

    environment {
        // KUBECONFIG_CREDENTIALS_ID = 'kubeconfig'
        DOCKER_CREDENTIALS_ID = 'dockerhub'
        GIT_REPO_URL = 'https://github.com/K200265-Insia-Farhan/SkillsMatch2.git'
    }

    stages {
        // stage('Connect to Kubernetes Cluster') {
        //     steps {
        //         script {
        //             withCredentials([file(credentialsId: KUBECONFIG_CREDENTIALS_ID, variable: 'KUBECONFIG')]) {
        //                 sh 'kubectl config view'
        //             }
        //         }
        //     }
        // }

        stage('Clone Git Repository') {
            steps {
                git branch: 'main', url: env.GIT_REPO_URL
            }
        }

        stage('Build and Push Docker Images') {
            steps {
                script {
                    dir('SkillsMatch2/frontend') {
                        sh 'docker build -t insiafarhan/skillsmatch:frontend5 .'
                        sh 'docker push insiafarhan/skillsmatch:frontend5'
                    }
                    dir('SkillsMatch2/backend') {
                        sh 'docker build -t insiafarhan/skillsmatch:backend5 .'
                        sh 'docker push insiafarhan/skillsmatch:backend5'
                    }
                    dir('SkillsMatch2/Job') {
                        sh 'docker build -t insiafarhan/skillsmatch:jobimage5 .'
                        sh 'docker push insiafarhan/skillsmatch:jobimage5'
                    }
                }
            }
        }

        // stage('Deploy to Kubernetes') {
        //     steps {
        //         script {
        //             withCredentials([file(credentialsId: KUBECONFIG_CREDENTIALS_ID, variable: 'KUBECONFIG')]) {
        //                 sh 'kubectl set image deployment/frontenddeploy skillsmatch1=insiafarhan/skillsmatch:frontend5'
        //                 sh 'kubectl set image deployment/backenddeploy skillsmatch1=insiafarhan/skillsmatch:backend5'
        //                 sh 'kubectl set image deployment/jobdeploy skillsmatch1=insiafarhan/skillsmatch:jobimage5'
        //             }
        //         }
        //     }
        // }
    }
}
