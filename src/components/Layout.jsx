import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { CONFIG } from "../config";

export default function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const nav = [
    ["Features", "/features"],
    ["Who it is for", "/for-pg-hostels"],
    ["Resident portal", "/resident-portal"],
    ["Pricing", "/pricing"],
    ["Services", "/services"],
    ["FAQ", "/faq"],
  ];

  return (
    <>
      <header className="nav">
        <div className="wrap">
          <Link className="brand" to="/" aria-label="Stayflow home">
            <i aria-hidden="true">
              <img src="/assets/stayflow-mark.svg" alt="" />
            </i>
            Stayflow
          </Link>
          <button
            className="menu-btn"
            aria-expanded={open}
            aria-controls="links"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
          <nav id="links" className={`links${open ? " open" : ""}`}>
            {nav.map(([label, to]) => (
              <NavLink key={to} to={to}>
                {label}
              </NavLink>
            ))}
            {CONFIG.appUrl && <a href={CONFIG.appUrl}>Sign in</a>}
            <Link className="btn primary" to="/demo">
              Book a demo
            </Link>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="wrap">
          <div>
            <Link className="brand" to="/" aria-label="Stayflow home">
              <i aria-hidden="true">
                <img src="/assets/stayflow-mark.svg" alt="" />
              </i>
              Stayflow
            </Link>
            <p style={{ marginTop: "12px" }}>
              Property management software for PG, hostel, co-living and apartment operators.
            </p>
          </div>
          <p>Tenant documents are stored privately and access is limited by role and property.</p>
        </div>
      </footer>
    </>
  );
}
