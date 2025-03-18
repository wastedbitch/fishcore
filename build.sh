#!/bin/bash

echo "Stopping old dev container"
docker stop fishcore 2>/dev/null || true

echo "Removing old dev container"
docker rm fishcore 2>/dev/null || true

echo "Removing old dev image"
docker image rm fishcore 2>/dev/null || true

echo "Building new dev container from Devfile"
docker build -t fishcore .

echo "Starting dev container with docker compose"
docker compose up -d