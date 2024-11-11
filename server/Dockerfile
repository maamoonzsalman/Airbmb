FROM node:16

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --production=false

COPY . .

RUN npm install -g typescript
RUN npm run build  # Assuming "build" script in package.json runs "tsc" to compile TypeScript to JavaScript

EXPOSE 4000

CMD ["node", "dist/server.js"]
