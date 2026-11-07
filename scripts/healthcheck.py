"""Development Health Check Utility

Checks the availability of the local backend and frontend services.
Usage:
    python scripts/healthcheck.py
"""

import sys
import urllib.request
import urllib.error


def check_endpoint(name: str, url: str) -> bool:
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "HealthCheck/1.0"})
        with urllib.request.urlopen(req, timeout=3) as resp:
            print(f"[{name}] OK - HTTP {resp.status} ({url})")
            return True
    except urllib.error.URLError as e:
        print(f"[{name}] OFFLINE - {e.reason} ({url})")
        return False
    except Exception as e:
        print(f"[{name}] ERROR - {e} ({url})")
        return False


def main():
    print("Checking BudgetBuddy service status...")
    backend = check_endpoint("Backend API", "http://127.0.0.1:8000/docs")
    frontend = check_endpoint("Frontend App", "http://localhost:3000")

    if backend and frontend:
        print("\nAll services are reachable.")
        sys.exit(0)
    else:
        print("\nNotice: One or more services are not running.")
        sys.exit(0)


if __name__ == "__main__":
    main()
