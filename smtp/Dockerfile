FROM python:3.8-alpine

RUN python3 -m venv {PWD}/opt/venv

RUN . {PWD}/opt/venv/bin/activate

COPY . .

CMD ["python", "emailAutomation.py"]