FROM mysql:5.7

ENV MYSQL_DATABASE=nodedb \
    MYSQL_ROOT_PASSWORD=root

ADD create_table_people.sql /docker-entrypoint-initdb.d