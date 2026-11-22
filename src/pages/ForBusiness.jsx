import { useState } from "react";
import Seo from "../components/Seo";

export default function ForBusiness() {
  const audiences = {
    pg: ["PG and hostels", [["Beds, not just rooms", "Set rooms as single, double or triple sharing."], ["Dues at a glance", "See paid, partial and overdue rent."], ["Meter readings", "Add readings and flow charges into invoices."]]],
    apt: ["Apartments", [["Units and households", "Record one primary tenant and family members."], ["Combined billing", "Bill rent, utilities and maintenance together."], ["Notices and requests", "Post notices and track resident requests."]]],
    co: ["Co-living and mixed", [["PG and apartments together", "Run bed and whole-unit properties."], ["One portfolio", "Switch between property and combined views."], ["Separate teams", "Give managers only assigned properties."]]],
  };
  const [key, setKey] = useState("pg");
  return (
    <>
      <Seo title="Software for PG, Hostels and Apartments" description="Stayflow supports PGs, hostels, apartments, co-living properties and mixed portfolios." path="/for-pg-hostels" />
      <section className="band alt">
        <div className="wrap">
          <div className="eyebrow">Who it is for</div>
          <h1 className="h2">Built for the way you actually rent.</h1>
          <div className="seg" role="group" aria-label="Business type">
            {Object.entries(audiences).map(([id, [label]]) => (
              <button key={id} aria-pressed={key === id} onClick={() => setKey(id)}>{label}</button>
            ))}
          </div>
          <div className="aud">
            {audiences[key][1].map(([title, description]) => (
              <div key={title}><h3>{title}</h3><p>{description}</p></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
