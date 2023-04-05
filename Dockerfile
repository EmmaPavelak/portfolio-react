FROM node:18-alpine as build

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --production

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80