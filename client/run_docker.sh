#!/bin/bash


IMAGE_NAME=live-scores-api-client
CONTAINER_NAME=live-scores-api-container-client


sudo docker build --network=host --rm=true --force-rm=true -t ${IMAGE_NAME} .


sudo docker run \
  -d \
  --restart unless-stopped \
  -p 3000:3000 \
  -e REACT_APP_BACKEND_API='http://localhost:5000/'\
  --name=${CONTAINER_NAME} \
  -it ${IMAGE_NAME}  