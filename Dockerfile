
FROM node:18.18.0

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5173

RUN npm install -

CMD [ "npm", "run", "dev"]
