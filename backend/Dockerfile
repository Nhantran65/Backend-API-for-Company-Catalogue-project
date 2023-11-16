FROM maven:3.9.5-eclipse-temurin-21-alpine

WORKDIR /usr/company-catalogue-api

COPY . .

ARG DB_HOST=fake
ENV DB_HOST=${DB_HOST}
ARG DB_USERNAME=fake
ENV DB_USERNAME=${DB_USERNAME}
ARG DB_PASSWORD=fake
ENV DB_PASSWORD=${DB_PASSWORD}

RUN mvn package

EXPOSE 443 80

ENTRYPOINT ["java","-jar","target/company-catalogue-api.jar"]