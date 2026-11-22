import Seo from "../components/Seo";

export default function ResidentPortal() {
  return (
    <>
      <Seo title="Resident Portal" description="A mobile-friendly tenant portal for invoices, receipts, documents, notices and help requests." path="/resident-portal" />
      <section className="band alt">
        <div className="wrap app-grid">
          <div>
            <div className="eyebrow">Resident portal</div>
            <h1 className="h2">Your residents, one tap away.</h1>
            <p className="lead">Residents can check bills, receipts and property updates from a mobile-friendly web portal.</p>
            <ul className="app-list">
              <li><i aria-hidden="true">₹</i><div><b>Rent and receipts</b><span>View invoices, balances and receipts.</span></div></li>
              <li><i aria-hidden="true">ID</i><div><b>Documents</b><span>Upload and view private documents.</span></div></li>
              <li><i aria-hidden="true">!</i><div><b>Notices</b><span>Read property announcements.</span></div></li>
              <li><i aria-hidden="true">?</i><div><b>Help requests</b><span>Send requests to the operations team.</span></div></li>
            </ul>
            <div className="lang" aria-label="Languages">
              <div>English<small>EN</small></div><div>తెలుగు<small>TE</small></div><div>हिन्दी<small>HI</small></div><div>ಕನ್ನಡ<small>KN</small></div>
            </div>
          </div>
          <div>
            <div className="phone" role="img" aria-label="Illustrative resident portal">
              <div className="top"><span>9:41</span><span>Stayflow</span></div>
              <div className="hi">Hello, Ravi</div><div className="sub">Room 204 · Bed 2</div>
              <div className="due"><small>Rent due on 5 Dec</small><strong>₹6,500</strong><span>Pay now</span></div>
              <div className="rows"><div>Invoices <em>3 open</em></div><div>Receipts <em>12</em></div><div>Documents <em>2</em></div><div>Raise a request <em>→</em></div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
