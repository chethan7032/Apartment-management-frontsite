import { useState } from "react";
import Seo from "../components/Seo";
import { FEATURES } from "../data";

export default function Features() {
  const [selected, setSelected] = useState(FEATURES[0].id);
  const feature = FEATURES.find((item) => item.id === selected);
  return (
    <>
      <Seo title="Property Management Features" description="Explore Stayflow features for properties, tenants, billing, maintenance, automation and reporting." path="/features" />
      <section className="band">
        <div className="wrap">
          <div className="eyebrow">Features</div>
          <h1 className="h2">Everything the platform does, by area.</h1>
          <p className="lead">Pick an area to see what is included.</p>
          <div className="tabs" role="tablist" aria-label="Feature areas">
            {FEATURES.map((item) => (
              <button key={item.id} role="tab" className="tab" aria-selected={item.id === selected} onClick={() => setSelected(item.id)}>
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
