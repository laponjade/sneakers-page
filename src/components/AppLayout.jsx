import { Outlet } from "react-router";
import Navbar from "./Navbar";
import SeeCart from "./SeeCart";
import { useState } from "react";

function AppLayout() {
  const [hover, setHover] = useState(false);
  return (
    <div className="w-4/5 mx-auto">
      <Navbar setHover={setHover} />
      <Outlet />
      <SeeCart hover={hover} setHover={setHover} />
    </div>
  );
}

export default AppLayout;
