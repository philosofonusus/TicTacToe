FROM node:12

WORKDIR /

COPY package*.json ./

RUN npm i

RUN npm i -g serve

COPY . .

RUN npm run build

CMD ["serve", "-s", "build"]