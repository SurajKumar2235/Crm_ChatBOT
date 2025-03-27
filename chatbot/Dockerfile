FROM python:3.10-slim

WORKDIR /chatbot

COPY . .

RUN pip install -r requirements.txt

CMD ["python", "manage.py", "runserver"]