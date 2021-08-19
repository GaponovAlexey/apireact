FROM node

WORKDIR /app

COPY package.json /app/

COPY . .

ENV PORT 4200

EXPOSE $PORT

RUN yarn install

CMD [ "yarn", "start" ]