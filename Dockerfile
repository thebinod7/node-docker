# FROM node:alpine
# COPY . /app
# WORKDIR /app
# CMD node app.js

FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
COPY . .
EXPOSE 4040
CMD ["node","app.js"]