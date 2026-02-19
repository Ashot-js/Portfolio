import { getSiteAge } from "../../utils/siteAge";
import "./SiteAge.scss";
export default function SiteAge() {
  const startDate = import.meta.env.VITE_SITE_START;

  const { years, months, days } = getSiteAge(startDate);

  return (
    <div className="SitePage">
      Site online for {years} {years === 1 ? "year" : "years"} {months}{" "}
      {months === 1 ? "month" : "months"} {days} {days === 1 ? "day" : "days"}
    </div>
  );
}
