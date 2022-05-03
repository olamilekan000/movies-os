FROM node:14.15-alpine

WORKDIR /app/

COPY ./package.json .

RUN npm install

COPY . .

EXPOSE 9093

CMD ["npm", "run", "start"]
