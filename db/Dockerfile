FROM postgres:15-alpine
COPY csv_normalize_2018v3.csv .
RUN mv csv_normalize_2018v3.csv /var/lib/postgresql/data
COPY . .

EXPOSE 5432

ENV POSTGRES_DB=siniestros  
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=password
ENV PGDATA=/var/lib/postgresql/data/some_name/

