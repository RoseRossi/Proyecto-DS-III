FROM node:latest

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4800

CMD ["node", "server/src/index.js"]