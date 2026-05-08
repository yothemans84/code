# TongYan Travel ERP
Enterprise-ready AI-powered Travel ERP SaaS for Malaysia travel agencies, cruise agencies, and tour operators.

## Stack
Next.js 15, TypeScript, Tailwind, shadcn-style components, TanStack Table, Recharts, Framer Motion, Prisma, PostgreSQL, NextAuth.

## Modules
Dashboard, Bookings, Passengers, Payments, Packages, Departures, Reports, Documents, AI Assistant, Users, CRM, Notifications.

## Setup
1. `cp .env.example .env`
2. `npm install`
3. `npx prisma migrate dev --name init`
4. `npm run db:seed`
5. `npm run dev`

## Quality
- `npm run lint`
- `npm run typecheck`

## Architecture highlights
- App Router with server components first
- Server actions + REST APIs
- Role-based auth with middleware protection
- Prisma schema with soft-delete and indexes
- Booking reference generation format: `TYE-YYYY-0001`
- MYR currency + DD/MM/YYYY formatting utilities
- S3-compatible storage env for document module
