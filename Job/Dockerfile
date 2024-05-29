# Use the official Python image as base
FROM python:3.8-slim

# Set environment variables for Flask
ENV FLASK_APP=job-flaskapi.py \
        FLASK_RUN_HOST=0.0.0.0 \
        FLASK_RUN_PORT=2003

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install system dependencies
RUN apt-get update && \
        apt-get install -y --no-install-recommends \
        build-essential \
        libgomp1 \
        && \
        apt-get clean && \
        rm -rf /var/lib/apt/lists/*

# Install Python dependencies
RUN pip install --no-cache-dir \
  pandas \
        numpy \
        scikit-learn \
        Flask \
        flask-cors \
        sqlalchemy \
        tensorflow \
        psycopg2-binary \
        gunicorn

# Expose port 2003 to the outside world
EXPOSE 2003

# Command to run the Flask application
CMD ["gunicorn", "-b", "0.0.0.0:2003", "job-flaskapi:app"]
