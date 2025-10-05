# Dockerfile
FROM python:3.11-slim

# Set working directory
WORKDIR /code

# Prevent Python from writing .pyc files
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install dependencies
COPY requirements.txt /code/
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the project
COPY . /code/

# Collect static files (optional but recommended)
RUN python manage.py collectstatic --noinput

# Expose port
EXPOSE 8000

# Run Gunicorn as the app process
CMD ["gunicorn", "--bind", ":8000", "--workers", "2", "backend.wsgi"]
