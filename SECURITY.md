# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 2.x.x   | :white_check_mark: |
| < 2.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability within BudgetBuddy, please do not disclose it publicly via issue trackers.

Please submit security concerns privately by contacting the project maintainers or emailing `annrosept007@gmail.com`.

### Security Best Practices
- Never commit production secrets, database credentials, or `.env` files to source control.
- Ensure all JWT secrets in production are set to cryptographically secure strings.
- Keep dependencies updated regularly using automated audit scanning (`npm audit`, pip updates).
