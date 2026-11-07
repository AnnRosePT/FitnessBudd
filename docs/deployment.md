# Production Deployment Guide

This guide covers deployment strategies, environment variables, and production best practices for BudgetBuddy.

## 1. Docker Compose Deployment

The project includes a ready-to-use `docker-compose.yml` to orchestrate client and server services.

```bash
docker compose up -d --build
```

Services exposed:
- `client`: Served via Nginx on port `3000` (or `80`)
- `server`: FastAPI service running with Uvicorn on port `8000`

## 2. Environment Variables Checklist

### Backend (`server/.env`)
- `DATABASE_URL`: Connection string for PostgreSQL in production (e.g., `postgresql+psycopg2://user:pass@host:5432/dbname`)
- `JWT_SECRET_KEY`: High-entropy random secret key for signing tokens
- `ACCESS_TOKEN_EXPIRE_MINUTES`: Token lifetime in minutes (default: 1440 = 24h)
- `FRONTEND_URL`: URL of the frontend client for CORS validation
- `CORS_ORIGINS`: Comma-separated list of allowed origins

### Frontend (`client/.env`)
- `REACT_APP_API_URL`: Root URL of the FastAPI backend API without trailing slash

## 3. Production Hardening Checklist
- [ ] Replace default JWT secret with a secure generated string.
- [ ] Ensure `SEED_DEMO_DATA` is disabled or restricted in live environments.
- [ ] Configure HTTPS via a reverse proxy (e.g., Caddy, Nginx, Cloudflare).
- [ ] Setup database backup schedules for SQLite or PostgreSQL.
