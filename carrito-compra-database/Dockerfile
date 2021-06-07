FROM mongo:4.0.4

ENV MONGO_INITDB_DATABASE=desafio_walmart
ENV MONGO_INITDB_ROOT_USERNAME=root
ENV MONGO_INITDB_ROOT_PASSWORD=root

ADD init-mongo.js /docker-entrypoint-initdb.d/

EXPOSE 27017