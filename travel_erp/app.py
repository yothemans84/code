from fastapi import FastAPI, HTTPException

from travel_erp.models import Customer, Invoice, Trip
from travel_erp.service import TravelERPService

app = FastAPI(title="Travel ERP", version="0.1.0")
service = TravelERPService()


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/customers", response_model=Customer)
def create_customer(customer: Customer) -> Customer:
    return service.add_customer(customer)


@app.get("/customers", response_model=list[Customer])
def get_customers() -> list[Customer]:
    return list(service.list_customers())


@app.post("/trips", response_model=Trip)
def create_trip(trip: Trip) -> Trip:
    try:
        return service.add_trip(trip)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc


@app.get("/trips", response_model=list[Trip])
def get_trips() -> list[Trip]:
    return list(service.list_trips())


@app.post("/invoices", response_model=Invoice)
def create_invoice(invoice: Invoice) -> Invoice:
    try:
        return service.add_invoice(invoice)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc


@app.get("/invoices", response_model=list[Invoice])
def get_invoices() -> list[Invoice]:
    return list(service.list_invoices())
