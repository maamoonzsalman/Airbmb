FROM node:16

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --production=false

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]
