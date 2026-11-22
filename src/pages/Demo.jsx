import Seo from "../components/Seo";
import DemoForm from "../components/DemoForm";

export default function Demo() {
  return (
    <>
      <Seo title="Book a Stayflow Demo" description="Request a free demo of Stayflow for your PG, hostel, co-living property or apartment portfolio." path="/demo" />
      <section className="band alt">
        <div className="wrap demo">
          <div>
            <div className="eyebrow">Book a demo</div>
            <h1 className="h2">See it with your own rooms in mind.</h1>
            <p className="lead">Tell us what you manage. We will prepare the right walkthrough.</p>
          </div>
          <DemoForm />
        </div>
      </section>
    </>
  );
}
