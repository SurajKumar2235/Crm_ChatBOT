# Zoho CRM Chatbot

This project helps developers with ZOHO CRM documentation through an interactive chatbot interface.

## Project Structure

```
chatbot/
├── backend/         # Django backend
└── frontend/        # Next.js frontend
    └── chatbot-frontend/
```

## Prerequisites

- Docker or Podman
- Node.js (v16+)
- npm or yarn
- Python 3.8+
- pip

## Getting Started

Follow these steps to run the project locally:

### 1. Backend Setup

First, start the backend services using Docker/Podman:

```bash
# Navigate to the backend directory
cd chatbot/backend
# create .env file
OPENAI_API_KEY=your_openai_api_key

# Start the services using Docker
docker-compose up -d

# OR if you're using Podman
podman-compose up -d
```

Once the Docker/Podman services are running, start the Django development server:

```bash
# In a new terminal, navigate to the backend directory
cd chatbot/backend

# Create and activate a virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start the Django server
python manage.py runserver
```

The backend API will be available at http://localhost:8000.

### 2. Frontend Setup

In a separate terminal, set up and run the frontend:

```bash
# Navigate to the frontend directory
cd chatbot/frontend/chatbot-frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend application will be available at http://localhost:3000.

## Features

- User authentication (register, login, logout)
- Dashboard with CRM statistics
- Interactive chat interface with AI-powered responses
- Markdown support for rich text responses
- Responsive design with DaisyUI and Tailwind CSS

## API Endpoints

### Authentication

- `POST /api/register/` - Register a new user
- `POST /api/login/` - Login and get authentication tokens
- `POST /api/logout/` - Logout and invalidate tokens
- `GET /api/profile/` - Get user profile information

### Admin

- `POST /api/admin/query-markdown/` - Send a query to the chatbot and receive a markdown response

## Technologies Used

### Backend
- Django
- Django REST Framework
- JWT Authentication
- ChromaDB for vector storage
- LangChain for AI integration

### Frontend
- Next.js
- TypeScript
- Tailwind CSS
- DaisyUI
- React Markdown

## Troubleshooting

### Backend Issues

- If you encounter database connection issues, make sure the Docker/Podman services are running properly.
- Check the Django server logs for detailed error messages.

### Frontend Issues

- If you see authentication errors, ensure the backend server is running and the API endpoints are correctly configured.
- For styling issues, check the browser console for CSS errors.