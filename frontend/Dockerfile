From node:latest

WORKDIR /frontendtest

COPY . .

RUN npm install next \
    npm install \
    npm install nodemon \
    npm install pg

EXPOSE 3000

cmd ["npm","run","dev"]
