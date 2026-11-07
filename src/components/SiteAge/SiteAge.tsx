const START = import.meta.env.VITE_SITE_START || "2026-02-23";

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? "" : "s"}`;

function getSiteAge(startDate: string) {
  const start = new Date(startDate);
  if (Number.isNaN(start.getTime())) return { years: 0, months: 0, days: 0 };

  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();

  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); // days in previous month
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  return { years, months, days };
}

export default function SiteAge() {
  const { years, months, days } = getSiteAge(START);
  return (
    <div className="SitePage">
      Online for {plural(years, "year")} {plural(months, "month")} {plural(days, "day")}
    </div>
  );
}
