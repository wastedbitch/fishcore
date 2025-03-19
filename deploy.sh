#!/bin/bash
echo "Stopping old Prod container"
docker stop fishcore 2>/dev/null || true

echo "Removing old Prod container"
docker rm fishcore 2>/dev/null || true

echo "Removing old Prod image"
docker image rm fishcore 2>/dev/null || true

echo "Building new Prod container from Dockerfile"
docker build --no-cache -t fishcore .

echo "Starting Prod container with docker compose"
docker compose up -d --remove-orphans