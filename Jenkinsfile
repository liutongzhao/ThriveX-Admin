pipeline {
    agent any

    environment {
        REGISTRY = 'ghcr.io'
        IMAGE_NAME = 'liutongzhao/thrivex-admin'
        IMAGE_TAG = "${env.BRANCH_NAME ?: 'blog_cuz'}-${env.BUILD_NUMBER}"
        FULL_IMAGE = "${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"
        LATEST_IMAGE = "${REGISTRY}/${IMAGE_NAME}:blog_cuz-latest"
    }

    stages {
        stage('Docker Build and Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'github-container-registry', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh 'echo "$DOCKER_PASSWORD" | docker login ${REGISTRY} -u "$DOCKER_USER" --password-stdin'
                    sh '''
                        docker buildx build \
                          --platform linux/amd64 \
                          --tag ${FULL_IMAGE} \
                          --tag ${LATEST_IMAGE} \
                          --push \
                          .
                    '''
                }
            }
        }
    }
}
