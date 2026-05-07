from pydantic import BaseModel, Field


class Customer(BaseModel):
    id: int
    name: str
    email: str


class Trip(BaseModel):
    id: int
    customer_id: int
    destination: str
    start_date: str = Field(description="ISO date")
    end_date: str = Field(description="ISO date")
    status: str = "planned"


class Invoice(BaseModel):
    id: int
    trip_id: int
    amount: float
    currency: str = "USD"
    paid: bool = False
