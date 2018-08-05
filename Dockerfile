FROM node:10.4.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN yarn
RUN yarn build

ENV PORT 443
EXPOSE 443

CMD yarn start | tee /var/log/app.log


