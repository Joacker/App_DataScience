FROM node:16.6.1-alpine3.14 AS builder

WORKDIR /app-transit

COPY package*.json ./
RUN npm ci --only=production

COPY . .

RUN npm install
CMD ["npm","start"]