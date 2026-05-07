export const formatMYR = (value: number) => new Intl.NumberFormat("ms-MY", { style: "currency", currency: "MYR" }).format(value);
export const formatDateMY = (value: string | Date) => new Intl.DateTimeFormat("en-GB").format(new Date(value));
