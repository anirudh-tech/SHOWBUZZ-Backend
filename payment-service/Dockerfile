FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install -g typescript

COPY . .

RUN npm run build

EXPOSE 3005

CMD [ "npm" , "start" ]
