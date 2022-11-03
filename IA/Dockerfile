FROM python:3.9 as builder

WORKDIR /usr/src/app

RUN pip install --upgrade pip

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000

ENTRYPOINT ["python"]
CMD ["main.py"]