import { z } from "zod";
export const bookingSchema = z.object({
  customerName: z.string().min(2),
  customerEmail: z.string().email(),
  customerPhone: z.string().min(8),
  packageId: z.string().min(1),
  userId: z.string().min(1),
  totalAmount: z.number().positive(),
  depositAmount: z.number().min(0).default(0)
});
