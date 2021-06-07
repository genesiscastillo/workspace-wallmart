# Stage 1
FROM node:14-slim as BUILD-STEP
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install -g @angular/cli 
COPY . /app
RUN ng build --configuration=production

# Stage 2
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=BUILD-STEP /app/dist/carrito-compra-frontend /usr/share/nginx/html

EXPOSE 80
