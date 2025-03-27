# ChatBot Backend

This is the backend service for the ChatBot application built with Django and Django REST Framework.

## Tech Stack

- Python 3.12
- Django 5.1.7
- Django REST Framework 3.15.2
- PostgreSQL 15
- Docker & Docker Compose

## Project Structure

```
backend/
├── chatApi/         # Main application module
├── users/           # User management module
├── chatbot/         # Core chatbot module
├── django/          # Django project settings
├── manage.py        # Django management script
├── requirements.txt # Python dependencies
└── docker-compose.yml # Docker configuration
```

## Prerequisites

- Python 3.x
- Docker and Docker Compose
- PostgreSQL (if running without Docker)

## Setup Instructions

1. Clone the repository
2. Navigate to the backend directory:
   ```bash
   cd chatbot/backend
   ```

3. Create and activate a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

5. Using Docker:
   ```bash
   docker-compose up -d
   ```

   This will start:
   - PostgreSQL database on port 5432
   - Database credentials:
     - Database: mydatabase
     - User: myuser
     - Password: mypassword

6. Run migrations:
   ```bash
   python manage.py migrate
   ```

7. Create a superuser (optional):
   ```bash
   python manage.py createsuperuser
   ```

8. Start the development server:
   ```bash
   python manage.py runserver
   ```

The server will start at `http://localhost:8000`

## API Documentation

The API documentation is available at:
- Swagger UI: `http://localhost:8000/swagger/`
- ReDoc: `http://localhost:8000/redoc/`

## Authentication

The application uses JWT (JSON Web Token) authentication. To authenticate:
1. Obtain a token by sending a POST request to `/api/token/` with username and password
2. Use the token in subsequent requests in the Authorization header:
   ```
   Authorization: Bearer <your_token>
   ```

## Development

- The project uses Django REST Framework for API development
- Database migrations are handled through Django's migration system
- Docker Compose is used for containerized development environment

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

