# syntax=docker/dockerfile:1

FROM node:18.16.0-alpine as builder

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

COPY ["apps/api/package.json", "apps/api/yarn.lock", "./apps/api/"]

RUN yarn install && yarn cache clean

# Copy the rest of the source files into the image.
COPY . .

RUN yarn build

FROM node:18.16.0-alpine
WORKDIR /app
COPY --from=builder /app/package.json /app/yarn.lock ./
COPY --from=builder /app/apps/api/package.json /app/apps/api/yarn.lock ./apps/api/
COPY --from=builder /app/apps/api/dist ./apps/api

RUN yarn install --production && yarn cache clean

CMD ["node", "./apps/api/main.js"]
