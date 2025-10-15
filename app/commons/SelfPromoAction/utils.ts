const currentDate = new Date();
const startDate = new Date(2024, 10, 18, 0, 0, 0, 0); // set start date
const endDate = new Date(2024, 11, 2, 23, 59, 59, 999); // set end date

export const isTimePromo = currentDate >= startDate && currentDate <= endDate;
