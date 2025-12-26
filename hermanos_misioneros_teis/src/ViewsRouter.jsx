import { Routes, Route } from "react-router";

import Main from "./components/Main";
import Services from "./components/Services";
import Philosophy from "./components/Philosophy";
import Address from "./components/Address";
import Publications from "./components/Publications";

const ViewsRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/services" element={<Services />} />
      <Route path="/philosophy" element={<Philosophy />} />
      <Route path="/address" element={<Address />} />
      <Route path="/publications" element={<Publications />} />
    </Routes>
  );
};

export default ViewsRouter;
