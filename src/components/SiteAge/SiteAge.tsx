import { getSiteAge } from "../../utils/siteAge";

export default function SiteAge() {
  const startDate = import.meta.env.VITE_SITE_START || "2026-02-23";
  const { years, months, days } = getSiteAge(startDate);

  return (
    <div className="SitePage">
      Site online for {years} {years === 1 ? "year" : "years"} {months}{" "}
      {months === 1 ? "month" : "months"} {days} {days === 1 ? "day" : "days"}
    </div>
  );
}
