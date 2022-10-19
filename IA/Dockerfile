FROM python:3.9-alpine

WORKDIR /IA

RUN apk add gcc musl-dev python3-dev libffi-dev openssl-dev
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install -U flask-cors

COPY . .

EXPOSE 5000

CMD ["python3", "-u", "main.py"]