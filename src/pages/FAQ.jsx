import Seo from "../components/Seo";
import { FAQ_ITEMS } from "../data";

export default function FAQ() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
  return (
    <>
      <Seo title="Frequently Asked Questions" description="Answers about Stayflow for PGs, apartments, payments, WhatsApp, data and hosting." path="/faq" structuredData={structuredData} />
      <section className="band">
        <div className="wrap">
          <div className="eyebrow">Questions</div>
          <h1 className="h2">Answers before you ask.</h1>
          <div className="faq">
            {FAQ_ITEMS.map(([question, answer]) => (
              <details key={question}><summary>{question}</summary><p>{answer}</p></details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
