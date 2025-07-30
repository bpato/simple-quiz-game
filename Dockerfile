FROM node:18-alpine

LABEL org.opencontainers.image.source https://github.com/bpato/simple-quiz-game

WORKDIR /app

COPY package.json .

RUN npm install -g pnpm

RUN pnpm install

RUN npm i -g serve

COPY . .

RUN pnpm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]