import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Features from "./pages/Features";
import ForBusiness from "./pages/ForBusiness";
import ResidentPortal from "./pages/ResidentPortal";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import Demo from "./pages/Demo";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="for-pg-hostels" element={<ForBusiness />} />
        <Route path="resident-portal" element={<ResidentPortal />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="services" element={<Services />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="demo" element={<Demo />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
