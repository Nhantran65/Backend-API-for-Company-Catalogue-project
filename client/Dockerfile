FROM node:21

WORKDIR /usr/nextjs-app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 443 80

ENTRYPOINT ["npm","start"]