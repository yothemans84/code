# Travel ERP

A lightweight Travel ERP starter built with FastAPI.

## Features
- Customer management
- Trip booking management
- Invoice tracking
- Health endpoint for service checks

## Run
```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn travel_erp.app:app --reload
```

## API Endpoints
- `GET /health`
- `POST /customers`, `GET /customers`
- `POST /trips`, `GET /trips`
- `POST /invoices`, `GET /invoices`
