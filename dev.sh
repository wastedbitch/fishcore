!/bin/bash

echo "Stopping old dev container"
docker stop devcore 2>/dev/null || true

echo "Removing old dev container"
docker rm devcore 2>/dev/null || true

echo "Removing old dev image"
docker image rm devcore 2>/dev/null || true

echo "Building new dev container from Devfile"
docker build --no-cache -f DevDockerfile -t devcore .

echo "Starting dev container with docker compose"
docker compose -f dev-docker-compose.yaml up -d

# docker exec -it devcore sh