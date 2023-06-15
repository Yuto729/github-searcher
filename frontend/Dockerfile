# Dockerfile
# Stage 1 - the build process
FROM node:18.16.0-alpine as build-deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . ./