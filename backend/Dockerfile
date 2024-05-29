From node:latest

WORKDIR /backendtest

COPY . .

RUN npm install \
    npm install sequelize-cli \
    npm install nodemon \
    npm install express

RUN npx sequelize-cli db:migrate

EXPOSE 5000

cmd ["npm","start"]
