# System Architecture & Technical Design

This document provides an overview of the BudgetBuddy architecture, data models, and system flows.

## 1. High-Level Architecture

BudgetBuddy follows a decoupled full-stack architecture:

```
[ Client: React SPA ] (Port 3000)
        │
        ▼ HTTP / REST (JWT in Authorization Header)
[ Backend: FastAPI ] (Port 8000)
   ├── Routers / Controllers (HTTP layer)
   ├── Services (Business logic & validations)
   ├── ORM Entities (SQLAlchemy models)
   └── SQLite / PostgreSQL Database
```

## 2. Backend Layering Pattern

The backend follows a clean, modular structure:

1. **Controllers (`src/*/controller.py`)**: Handle HTTP routing, status codes, query params, and serialize responses.
2. **Services (`src/*/service.py`)**: Implement business logic, permission checks, data aggregation, and database queries.
3. **Entities (`src/*/entity.py`)**: SQLAlchemy models mapping table schemas, relationships, foreign keys, and indexes.
4. **Pydantic Models (`src/*/models.py`)**: Request validation schemas and response DTOs.

## 3. Authentication & Authorization

- **Authentication**: Stateless JSON Web Tokens (JWT) signed using HS256.
- **Password Security**: Passlib with PBKDF2-SHA256 and bcrypt support.
- **Role-Based Access Control (RBAC)**:
  - `student`: Standard access (incomes, expenses, savings goals).
  - `premium`: Extended access (budgets, advanced analytics, reports export).
  - `admin`: System-level access (user management, categories, logs).

## 4. Frontend Design System

- **Framework**: React 18 with Create React App.
- **Styling**: Tailwind CSS with customized colors and dark/light mode support.
- **State Management**: React Context (`AuthContext`, `FinanceContext`, `AnalyticsContext`, `ToastContext`).
- **Charts**: Recharts for interactive financial visualizations.
