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
                    sh "sudo -S docker build -t insiafarhan/skillsmatch1:jobimage8 Job"
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
                    sh "sudo -S docker push insiafarhan/skillsmatch1:jobimage8"
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
                    sh "sudo -S docker pull insiafarhan/skillsmatch1:jobimage8"
                }
            }
        }
        
        stage('Create K8 deployments') {
            steps {
                script {
                    // Push the Docker image to Docker Hub or your Docker registry
                    sh "kubectl --kubeconfig=$KUBECONFIG get nodes"
                    sh "kubectl --kubeconfig=$KUBECONFIG create deployment jobdeploy1 --image=insiafarhan/skillsmatch1:jobimage8 --replicas=3"
                    sh "kubectl --kubeconfig=$KUBECONFIG create deployment frontenddeploy1 --image=insiafarhan/skillsmatch1:frontend7 --replicas=3"
                    sh "kubectl --kubeconfig=$KUBECONFIG create deployment backenddeploy1 --image=insiafarhan/skillsmatch1:backend7 --replicas=3"
                }
            }
        }
        
        stage('Expose K8 deployments') {
            steps {
                script {
                    // Push the Docker image to Docker Hub or your Docker registry
                    sh "kubectl --kubeconfig=$KUBECONFIG expose deployment jobdeploy1 --port=2003 --type=LoadBalancer"
                    sh "kubectl --kubeconfig=$KUBECONFIG expose deployment frontenddeploy1 --port=3000 --type=LoadBalancer"
                    sh "kubectl --kubeconfig=$KUBECONFIG expose deployment backenddeploy1 --port=5000 --type=LoadBalancer"
                    }
            }
        }
    }
}
