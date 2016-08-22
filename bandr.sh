#!/bin/sh

sudo docker kill my-ui
sudo docker rm my-ui
sudo docker build -t my-ui .

echo 'sleeping 30'
sleep 30

sudo docker run --name my-ui -d --net=host my-ui
