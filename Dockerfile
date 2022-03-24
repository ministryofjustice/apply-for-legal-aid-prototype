FROM node:15.7-alpine

ENV NODE_ENV=production

RUN addgroup -g 1017 -S appgroup \
  && adduser -u 1017 -S appuser -G appgroup \
  && apk update \
  && apk add build-base python

WORKDIR /app

<<<<<<< HEAD
COPY package*.json ./

RUN npm install

COPY app/ ./app
COPY docs/ ./docs
COPY gulp/ ./gulp
COPY lib/ ./lib
COPY *.js ./
COPY start.sh ./

=======
COPY . .

RUN npm install

>>>>>>> main
RUN chown -R appuser:appgroup /app

USER 1017

<<<<<<< HEAD
CMD ["./start.sh"]
=======
RUN chmod +x start.sh

CMD ["./start.sh"]
>>>>>>> main
