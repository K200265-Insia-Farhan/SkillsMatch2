pipeline {
    agent any
     environment {
        // Define the variable to store the kubeconfig file path
        KUBECONFIG = credentials('kubeconfig')
    }
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
                    sh "echo '123456789' | sudo -S docker login -u insiafarhan --password-stdin"
                    sh "sudo -S docker build -t insiafarhan/skillsmatch1:frontend7 frontend"
                    sh "sudo -S docker build -t insiafarhan/skillsmatch1:backend7 backend"
                    sh "sudo -S docker build -t insiafarhan/skillsmatch1:jobimage7 Job"
                }
            }
        }
        stage('Push Docker Images') {
            steps {
                script {
                    // Push the Docker image to Docker Hub or your Docker registry
                    sh "echo '123456789' | sudo -S docker login -u insiafarhan --password-stdin"
                    sh "sudo -S docker push insiafarhan/skillsmatch1:frontend7"
                    sh "sudo -S docker push insiafarhan/skillsmatch1:backend7"
                    sh "sudo -S docker push insiafarhan/skillsmatch1:jobimage7"
                }
            }
        }
        
        stage('Pull Docker Images') {
            steps {
                script {
                    // Push the Docker image to Docker Hub or your Docker registry
                    sh "echo '123456789' | sudo -S docker login -u insiafarhan --password-stdin"
                    sh "sudo -S docker pull insiafarhan/skillsmatch1:frontend7"
                    sh "sudo -S docker pull insiafarhan/skillsmatch1:backend7"
                    sh "sudo -S docker pull insiafarhan/skillsmatch1:jobimage7"
                }
            }
        }
        
        stage('Create K8 deployments') {
            steps {
                script {
                    // Push the Docker image to Docker Hub or your Docker registry
                    sh "kubectl --kubeconfig=$KUBECONFIG get nodes"
                    sh "kubectl --kubeconfig=$KUBECONFIG create deployment jobdeploy --image=insiafarhan/skillsmatch1:jobimage7 --replicas=3"
                    sh "kubectl --kubeconfig=$KUBECONFIG create deployment frontenddeploy --image=insiafarhan/skillsmatch1:frontendimage7 --replicas=3"
                    sh "kubectl --kubeconfig=$KUBECONFIG create deployment backenddeploy --image=insiafarhan/skillsmatch1:backendimage7 --replicas=3"
                }
            }
        }
        
        stage('Expose K8 deployments') {
            steps {
                script {
                    // Push the Docker image to Docker Hub or your Docker registry
                    sh "kubectl expose deployment jobdeploy --port=2003 --type=LoadBalancer"
                    sh "kubectl expose deployment frontenddeploy --port=3000 --type=LoadBalancer"
                    sh "kubectl expose deployment backenddeploy --port=5000 --type=LoadBalancer"
                    }
            }
        }
    }
}
