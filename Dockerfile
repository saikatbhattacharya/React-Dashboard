# build environment
FROM mhart/alpine-node:8.9.4 as builder
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install webpack -g --silent
COPY . /app
RUN npm run build

# production environment
FROM nginx:1.13.9-alpine
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY --from=builder /app/dist /nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]