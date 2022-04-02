FROM python:3.8-alpine

RUN python3 -m venv /opt/venv

RUN . /opt/venv/bin/activate

COPY . .

CMD ["python", "emailAutomation.py"]