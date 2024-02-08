FROM node:20-alpine

RUN mkdir -p /app

WORKDIR /app

COPY --chown=root:root package*.json ./
RUN npm install

COPY --chown=root:root . .

EXPOSE 80

CMD [ "node", "index.js" ]