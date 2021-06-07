FROM maven:3.6.3-jdk-8-openj9 as BUILD_IMAGE
WORKDIR /app
COPY src /app/src/
COPY pom.* ./
RUN mvn clean -DskipTests install | grep -i BUILD

FROM openjdk:8-jdk-slim
COPY --from=BUILD_IMAGE /app/target/*.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]

EXPOSE 8080