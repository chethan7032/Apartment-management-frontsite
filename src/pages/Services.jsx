import Seo from "../components/Seo";

export default function Services() {
  const services = [
    ["Hosting and deployment", "Host and manage the platform, or deploy it on your server."],
    ["Data migration", "Move rooms, tenants and balances from Excel."],
    ["Payment setup", "Connect Razorpay or Stripe and test a payment."],
    ["WhatsApp and email setup", "Configure Twilio WhatsApp and SMTP."],
    ["Customisation", "Adapt templates, fields and workflows."],
    ["Training and support", "Train staff and provide launch support."],
  ];
  return (
    <>
      <Seo title="Setup and Managed Services" description="Stayflow provides hosting, data migration, payment setup, automation setup, customisation, training and support." path="/services" />
      <section className="band alt">
        <div className="wrap">
          <div className="eyebrow">Services</div>
          <h1 className="h2">We set it up and keep it running.</h1>
          <div className="cards">
            {services.map(([title, description]) => (
              <div className="card" key={title}><h3>{title}</h3><p>{description}</p></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
