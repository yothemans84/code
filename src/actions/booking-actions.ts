"use server";
import { prisma } from "@/lib/prisma";
import { bookingSchema } from "@/lib/validators/booking";

export async function createBookingAction(input: unknown) {
  const data = bookingSchema.parse(input);
  const year = new Date().getFullYear();
  const count = await prisma.booking.count({ where: { createdAt: { gte: new Date(`${year}-01-01`) } } });
  const reference = `TYE-${year}-${String(count + 1).padStart(4, "0")}`;
  const collectedAmount = data.depositAmount;
  return prisma.booking.create({ data: { ...data, reference, totalPax: 1, adultPax: 1, childPax: 0, collectedAmount, outstandingAmount: data.totalAmount - collectedAmount } });
}
