FROM node:alpine as builder

WORKDIR '/home/node'

COPY package.json .
RUN npm install
COPY . .

RUN chown -R node.node /home/node
RUN npm run build

FROM nginx
EXPOSE 3000
COPY --from=builder home/node/nginx/nginx.conf /etc/nginx/nginx.conf

# create log dir configured in nginx.conf
RUN mkdir -p /var/log/app_engine
COPY --from=builder /home/node/build /usr/share/nginx/html
