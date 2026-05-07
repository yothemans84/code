export type Role = "ADMIN" | "AGENT" | "FINANCE";
export const canManagePayments = (role: Role) => role === "ADMIN" || role === "FINANCE";
