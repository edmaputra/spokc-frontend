FROM node:8.11.3

WORKDIR /spokc-fe

COPY package.json /spokc-fe
RUN npm install
COPY . /spokc-fe

CMD node app.js

EXPOSE 3000
