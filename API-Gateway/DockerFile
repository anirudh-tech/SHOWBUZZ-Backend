FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN npm install

EXPOSE 8000

CMD [ "npm" , "run" , "dev" ]