FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install -g typescript

COPY . .

RUN npm run build

EXPOSE 8000

CMD [ "npm" , "start" ]
