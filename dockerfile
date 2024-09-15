FROM node:20.17.0

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm build

COPY . .

EXPOSE 8000

CMD ["npm", "run", "start"]
