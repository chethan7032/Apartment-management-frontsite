import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { FEATURES } from "../data";

const ROOMS = [
  ["201", "o,o,d"], ["202", "o,e"], ["203", "d,o,o"],
  ["204", "o,o,e,d"], ["205", "o,o"], ["206", "e,o,e"],
].map(([number, statuses]) => ({ number, beds: statuses.split(",") }));

function BedMap() {
  const beds = ROOMS.flatMap((room) => room.beds);
  const occupied = beds.filter((bed) => bed !== "e").length;
  const due = beds.filter((bed) => bed === "d").length;
  return (
    <div className="map" role="img" aria-label={`Sample bed map: ${occupied} of ${beds.length} beds occupied, ${due} with rent due`}>
      <div className="map-head"><strong>Sample PG, second floor</strong><span>Sample data</span></div>
      <div className="rooms">
        {ROOMS.map((room) => (
          <div className="room" key={room.number}>
            <b>Room {room.number}</b>
            <div className="beds">
              {room.beds.map((bed, index) => <span key={index} className={`bed ${bed}`} />)}
            </div>
            <small>{room.beds.filter((bed) => bed === "e").length} free of {room.beds.length}</small>
          </div>
        ))}
      </div>
      <div className="legend">
        <span><i className="bed o" />Occupied</span>
        <span><i className="bed d" />Rent due</span>
        <span><i className="bed e" />Free</span>
      </div>
      <div className="map-foot">
        <div><b>{occupied}/{beds.length}</b><span>beds occupied</span></div>
        <div><b>{beds.length - occupied}</b><span>beds free</span></div>
        <div><b>{due}</b><span>rents due</span></div>
      </div>
    </div>
  );
}

export default function Home() {
  const [featureId, setFeatureId] = useState(FEATURES[0].id);
  const feature = FEATURES.find((item) => item.id === featureId);
  const problems = [
    ["Rent in a notebook", "One clear invoice and payment record per tenant."],
    ["Dues in WhatsApp chats", "Automatic reminders and overdue alerts."],
    ["Readings in Excel", "Meter readings flow into the next invoice."],
    ["Empty beds nobody counts", "Live occupancy for every room and bed."],
  ];

  return (
    <>
      <Seo
        title="PG and Apartment Management Software"
        description="Manage rooms, beds, tenants, rent, payments, maintenance and WhatsApp reminders with Stayflow."
        path="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Stayflow",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: "Property management software for PG, hostel, co-living and apartment operators.",
        }}
      />
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">PG, hostel, co-living and apartment software</div>
            <h1>Run your PG or apartment from <em>one place</em>.</h1>
            <p className="lead">Rooms, beds, tenants, rent, payments, maintenance and WhatsApp reminders in one system.</p>
            <div className="cta-row">
              <Link className="btn primary" to="/demo">Book a free demo</Link>
              <Link className="btn ghost" to="/features">See all features</Link>
            </div>
            <div className="chips">
              <span className="chip">Multi-property</span>
              <span className="chip">Razorpay and Stripe</span>
              <span className="chip">WhatsApp reminders</span>
              <span className="chip">Four languages</span>
            </div>
          </div>
          <BedMap />
        </div>
      </section>
      <section className="band alt">
        <div className="wrap">
          <div className="eyebrow">Why operators switch</div>
          <h2 className="h2">Spreadsheets and chat groups stop working at about the third building.</h2>
          <div className="problem">
            {problems.map(([before, after]) => (
              <div key={before}><s>{before}</s><b>{after}</b></div>
            ))}
          </div>
        </div>
      </section>
      <section className="band" id="features">
        <div className="wrap">
          <div className="eyebrow">Features</div>
          <h2 className="h2">Everything the platform does, by area.</h2>
          <div className="tabs" role="tablist" aria-label="Feature areas">
            {FEATURES.map((item) => (
              <button key={item.id} role="tab" className="tab" aria-selected={item.id === featureId} onClick={() => setFeatureId(item.id)}>
                {item.tab}
              </button>
            ))}
          </div>
          <div className="panel" role="tabpanel">
            <div><h3>{feature.title}</h3><p className="lead">{feature.lead}</p></div>
            <ul className="points">{feature.points.map((point) => <li key={point}>{point}</li>)}</ul>
          </div>
        </div>
      </section>
    </>
  );
}
