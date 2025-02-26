#!/bin/bash
echo "stopping old container"
docker stop fishcore
echo "removing old container"
docker rm fishcore
echo "removing old image"
docker image rm reg.nnx.one/neo/fishcore
npm run build
echo "build new container"
docker build -t reg.nnx.one/neo/fishcore:latest .
docker push reg.nnx.one/neo/fishcore:latest