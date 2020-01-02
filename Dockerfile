FROM node:12.13.0-alpine

MAINTAINER van-Tu Pham <me@tudev.com>

# Create app directory Docker container
RUN md -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json/usr/src/app .
RUN npm install
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]