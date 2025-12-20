import { Routes, Route } from "react-router";

import MainPage from "./components/MainPage";
import Access from "./components/Access";
import AdressAndContacts from "./components/AdressAndContacts";
import Services from "./components/Services";
import Immediate from "./components/services/Immediate";
import Personalized from "./components/services/Personalized";
import Collaborations from "./components/services/Collaborations";
import Online from "./components/services/Online";

const ViewRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/access" element={<Access />} />
      <Route path="/contacts" element={<AdressAndContacts />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/immediate" element={<Immediate />} />
      <Route path="/services/personalized" element={<Personalized />} />
      <Route path="/services/collaborations" element={<Collaborations />} />
      <Route path="/services/online" element={<Online />} />
    </Routes>
  );
};

export default ViewRoutes;
