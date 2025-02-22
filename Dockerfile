FROM node:22-alpine

WORKDIR /src/app

COPY . . 

RUN npm i -g yarn

RUN yarn && yarn build

EXPOSE 3000

CMD ["yarn", "start"]