FROM node

WORKDIR /app

COPY package.json /app/

COPY . .

ENV PORT 3000

EXPOSE $PORT

VOLUME [ "/app/data" ]

RUN yarn install

CMD [ "yarn", "start" ]