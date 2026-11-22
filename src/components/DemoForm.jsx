import { useRef, useState } from "react";
import { CONFIG } from "../config";

export default function DemoForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    type: "PG or hostel",
    size: "",
    city: "",
    note: "",
  });
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState("");
  const textarea = useRef(null);

  const set = (key) => (event) =>
    setValues((current) => ({ ...current, [key]: event.target.value }));

  const submit = (event) => {
    event.preventDefault();
    setCopied("");
    setMessage(
      `Hello, I would like a demo of ${CONFIG.brand}.\n\nName: ${values.name}\nPhone: ${values.phone}\nBusiness: ${values.type}\nRooms or units: ${values.size || "not given"}\nCity: ${values.city || "not given"}${values.note ? `\nNote: ${values.note}` : ""}`,
    );
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied("Copied. Paste it into WhatsApp or email.");
    } catch {
      textarea.current?.focus();
      textarea.current?.select();
      setCopied("Text selected. Copy it with your keyboard.");
    }
  };

  const mail = CONFIG.email
    ? `mailto:${CONFIG.email}?subject=${encodeURIComponent(`${CONFIG.brand} demo request`)}&body=${encodeURIComponent(message)}`
    : "";
  const whatsapp = CONFIG.whatsapp
    ? `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`
    : "";

  return (
    <form className="form" onSubmit={submit}>
      <div className="field">
        <label htmlFor="f-name">Name</label>
        <input id="f-name" value={values.name} onChange={set("name")} required />
      </div>
      <div className="field">
        <label htmlFor="f-phone">Phone or WhatsApp</label>
        <input id="f-phone" inputMode="tel" value={values.phone} onChange={set("phone")} required />
      </div>
      <div className="field">
        <label htmlFor="f-type">Business type</label>
        <select id="f-type" value={values.type} onChange={set("type")}>
          <option>PG or hostel</option>
          <option>Apartments</option>
          <option>Co-living</option>
          <option>Mixed portfolio</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-size">Rooms or units</label>
        <input id="f-size" inputMode="numeric" value={values.size} onChange={set("size")} />
      </div>
      <div className="field full">
        <label htmlFor="f-city">City</label>
        <input id="f-city" value={values.city} onChange={set("city")} />
      </div>
      <div className="field full">
        <label htmlFor="f-note">Anything we should know</label>
        <textarea id="f-note" value={values.note} onChange={set("note")} />
      </div>
      <div className="field full">
        <button className="btn primary" type="submit">Prepare my request</button>
      </div>
      {message && (
        <div className="out">
          <p>This page does not send anything. Copy the message and send it to us.</p>
          <textarea ref={textarea} readOnly value={message} aria-label="Your request" />
          <div className="cta-row">
            <button className="btn ghost" type="button" onClick={copy}>Copy message</button>
            {mail && <a className="btn ghost" href={mail}>Open email</a>}
            {whatsapp && <a className="btn primary" href={whatsapp} target="_blank" rel="noopener">Open WhatsApp</a>}
          </div>
          {copied && <p role="status" style={{ marginTop: "10px" }}>{copied}</p>}
        </div>
      )}
    </form>
  );
}
