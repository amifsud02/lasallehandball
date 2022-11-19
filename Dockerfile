FROM node:14

RUN mkdir /frontend

WORKDIR /frontend

COPY ./package.json /frontend

RUN npm install

COPY . /frontend

RUN npm run build

CMD ["npm", "start"]
