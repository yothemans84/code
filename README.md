# BP Holiday ERP (Malaysia Travel ERP SaaS)

Production-ready SaaS scaffold for Malaysian travel agencies using Next.js 15, TypeScript, Tailwind, shadcn-style components, Prisma/PostgreSQL, NextAuth, Recharts, and TanStack Table-ready patterns.

## Modules
Dashboard, Booking Management, Passenger Management, Payments, Tour Packages, Departures, Reports, Document Centre, AI Assistant, User Management.

## Key Features
- Responsive sidebar layout
- KPI dashboard
- Booking CRUD via server actions + API
- Payment and outstanding balance tracking
- Role-based authentication model
- CSV report export endpoint
- Document upload endpoint
- Reusable component-first architecture

## Quick Start
1. Copy `.env.example` to `.env`
2. `npm install`
3. `npx prisma migrate dev --name init`
4. `npm run db:seed`
5. `npm run dev`

## Docker
`docker compose up --build`
