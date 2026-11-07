# REST API Reference

The BudgetBuddy backend exposes RESTful endpoints with JSON payloads. Interactive Swagger UI is available at `/docs`.

## Authentication & Users
- `POST /api/auth/register` - Create a new user account
- `POST /api/auth/login` - Authenticate credentials and receive JWT access token
- `GET /api/auth/me` - Retrieve current authenticated user profile
- `POST /api/auth/forgot-password` - Request a 6-digit OTP for password recovery
- `POST /api/auth/reset-password` - Reset password using verified OTP
- `PUT /api/users/profile` - Update profile settings and preferences
- `PUT /api/users/password` - Change account password

## Expenses
- `GET /api/expenses` - List user expenses with month and category filters
- `POST /api/expenses` - Create a new expense entry
- `PUT /api/expenses/{id}` - Update existing expense entry
- `DELETE /api/expenses/{id}` - Delete expense (Premium/Admin)
- `GET /api/expenses/export` - Export expenses to CSV format

## Income
- `GET /api/income` - List all income streams
- `POST /api/income` - Record a new income source
- `PUT /api/income/{id}` - Update an income record
- `DELETE /api/income/{id}` - Delete an income record

## Budgets (Premium / Admin)
- `GET /api/budgets` - Fetch active budgets and category limits
- `POST /api/budgets` - Create or update monthly budget target
- `DELETE /api/budgets/{id}` - Remove budget category

## Savings Goals
- `GET /api/savings` - List active savings goals and progress
- `POST /api/savings` - Create a new savings goal
- `POST /api/savings/{id}/contribute` - Add funds toward a goal
- `PUT /api/savings/{id}/extend` - Extend goal target date
- `DELETE /api/savings/{id}` - Delete savings goal

## Analytics & Reports (Premium / Admin)
- `GET /api/analytics/overview` - Aggregate monthly financial metrics and AI insights
- `GET /api/reports/monthly` - Generate monthly summary report
- `GET /api/reports/export/csv` - Download report in CSV format
- `GET /api/reports/export/xlsx` - Download report in Excel format

## Admin (Admin only)
- `GET /api/admin/users` - Manage registered users and change roles
- `GET /api/admin/categories` - Manage system-wide categories
- `GET /api/admin/logs` - View system activity and audit logs
- `GET /api/admin/stats` - Platform health and user metrics
