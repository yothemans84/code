from collections.abc import Iterable
from travel_erp.models import Customer, Invoice, Trip


class TravelERPService:
    """In-memory service layer for core Travel ERP entities."""

    def __init__(self) -> None:
        self.customers: dict[int, Customer] = {}
        self.trips: dict[int, Trip] = {}
        self.invoices: dict[int, Invoice] = {}

    def add_customer(self, customer: Customer) -> Customer:
        self.customers[customer.id] = customer
        return customer

    def add_trip(self, trip: Trip) -> Trip:
        if trip.customer_id not in self.customers:
            raise ValueError("customer_id does not exist")
        self.trips[trip.id] = trip
        return trip

    def add_invoice(self, invoice: Invoice) -> Invoice:
        if invoice.trip_id not in self.trips:
            raise ValueError("trip_id does not exist")
        self.invoices[invoice.id] = invoice
        return invoice

    def list_customers(self) -> Iterable[Customer]:
        return self.customers.values()

    def list_trips(self) -> Iterable[Trip]:
        return self.trips.values()

    def list_invoices(self) -> Iterable[Invoice]:
        return self.invoices.values()
