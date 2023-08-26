import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../Sidebar/SideBar";
import { AuthContext } from "../Context/Auth";

function Layout({ children }) {
  const { isUserLoggedIn } = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      {isUserLoggedIn && (
        <div style={{ display: "flex", gap: "10px" }}>
          <SideBar />
          <div style={{ width: "75%" }}>{children}</div>
        </div>
      )}
      {!isUserLoggedIn && children}
    </div>
  );
}

export default Layout;
