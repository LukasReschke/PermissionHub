FROM node

RUN apt-get update && apt-get install gnupg2 -y
RUN cd /usr/bin/ && wget -qO- https://repo1.maven.org/maven2/org/flywaydb/flyway-commandline/9.8.1/flyway-commandline-9.8.1-linux-x64.tar.gz | tar xvz && ln -s `pwd`/flyway-9.8.1/flyway /usr/local/bin 
