#!/bin/bash


IMAGE_NAME=live-scores-api
CONTAINER_NAME=live-scores-api-container


sudo docker build --network=host --rm=true --force-rm=true -t ${IMAGE_NAME} .


sudo docker run \
  -d \
  --restart unless-stopped \
  -p 5000:5000 \
  -e MONGODB_URL='mongodb+srv://kohaku:Lethidieutam1!@cluster0.6axc4jg.mongodb.net/?retryWrites=true&w=majority'\
  --name=${CONTAINER_NAME} \
  -it ${IMAGE_NAME}  