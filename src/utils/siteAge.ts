import { SiteAge } from "../types/global";

export function getSiteAge(startDate?: string): SiteAge {
  if (!startDate) {
    return { years: 0, months: 0, days: 0 };
  }

  const start = new Date(startDate);
  if (Number.isNaN(start.getTime())) {
    return { years: 0, months: 0, days: 0 };
  }

  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}
