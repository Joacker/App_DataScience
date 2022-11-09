FROM node:14

WORKDIR /app

COPY . .

RUN npm i
RUN npm install nodemon --save-dev

EXPOSE 8031

CMD ["npm","run","dev"]