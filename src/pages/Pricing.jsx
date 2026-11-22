import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function Pricing() {
  return (
    <>
      <Seo title="Pricing" description="Explore the Stayflow pilot programme and property-based plans for PG and apartment management." path="/pricing" />
      <section className="band">
        <div className="wrap">
          <div className="eyebrow">Pricing</div>
          <h1 className="h2">Pilot programme open for new owners.</h1>
          <p className="lead">Plans are priced per property after a short call about your rooms and needs.</p>
          <div className="cards">
            <div className="card hl">
              <span className="tag">Open now</span><h3>Pilot</h3><p>For owners who run the platform with us.</p>
              <ul><li>Guided setup</li><li>Spreadsheet migration</li><li>Direct team support</li></ul>
            </div>
            <div className="card"><h3>Per property plan</h3><p>Features are switched on per owner.</p><ul><li>Apartment or PG property</li><li>Staff and tenant accounts</li><li>Reports and statements</li></ul></div>
            <div className="card"><h3>Add-ons</h3><p>Optional pieces, set up for you.</p><ul><li>Online payments</li><li>WhatsApp reminders</li><li>Managed hosting</li></ul></div>
          </div>
          <div className="cta-row" style={{ marginTop: "24px" }}>
            <Link className="btn primary" to="/demo">Discuss pricing</Link>
          </div>
        </div>
      </section>
    </>
  );
}
