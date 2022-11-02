FROM python:3.6-alpine3.7 as builder

WORKDIR /usr/src/app

RUN apk add --no-cache --update \
    python3 python3-dev gcc \
    gfortran musl-dev g++ \
    libffi-dev openssl-dev \
    libxml2 libxml2-dev \
    libxslt libxslt-dev \
    libjpeg-turbo-dev zlib-dev

RUN pip install --upgrade pip

ADD requirements.txt .
RUN pip install -r requirements.txt
COPY . .

EXPOSE 5000

FROM python:3.6-alpine3.7 as runner

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app /usr/src/app
COPY --from=builder /usr/local/lib/python3.6/site-packages /usr/local/lib/python3.6/site-packages

CMD ["python", "main.py"]

