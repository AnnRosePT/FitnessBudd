# Frontend Component Architecture

This document outlines the UI component hierarchy and design conventions used across the React client.

## Component Organization

```
src/
├── components/
│   ├── Access/        # Role-based gating components (AccessDenied, FeatureLock, LockedButton)
│   ├── Buttons/       # Standard primary and interactive button primitives
│   ├── Cards/         # StatCard, CircleProgress, Badge, RoleBadge, HelpFeedbackCard
│   ├── Forms/         # FormInput, FormSelect, StatusSelect, DatePicker, FormError
│   └── Modals/        # Contextual modals (ExpenseModal, BudgetModal, GoalModal, ConfirmDialog)
├── context/           # React Context providers for global application state
├── features/          # Domain-specific components (admin, auth, dashboard)
├── pages/             # Page route views (Dashboard, Expenses, Budgets, Reports, etc.)
└── services/          # HTTP client layer and data transformers
```

## Role-Based Access Guards

Features restricted by membership tier are protected using gating primitives:

- `<FeatureLock>`: Wraps premium features and shows an upgrade prompt for standard student accounts.
- `<LockedButton>`: Disables actions and displays tier badges for unauthorized roles.
- `<AccessDenied>`: Full-page barrier for unauthorized administrative route views.

## Styling & Theme

- Built with Tailwind CSS utility classes.
- Color palette configured in `tailwind.config.js`.
- Responsive layouts optimized for desktop dashboards and mobile viewport navigation.
