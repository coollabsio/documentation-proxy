FROM node:lts-alpine
WORKDIR /app
COPY . .
EXPOSE 3000
RUN npm i
CMD npm run start