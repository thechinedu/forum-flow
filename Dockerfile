# syntax=docker/dockerfile:1

FROM node:18.16.0-alpine as builder

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

COPY ["apps/api/package.json", "apps/api/yarn.lock", "./apps/api/"]

# Run the application as a non-root user.
USER node

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 2001

# Run the application.
CMD node apps/api/main.js


# Use production node environment by default.
ENV NODE_ENV production
