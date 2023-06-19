import { Outlet } from "react-router-dom";

import Navbar from "../components/Nabvar";

function Generic() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Generic;
