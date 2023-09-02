import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../Sidebar/SideBar";
import { AuthContext } from "../Context/Auth";
import { PageWrapper } from "./Layout.styled";

function Layout({ children }) {
  const { isUserLoggedIn } = useContext(AuthContext);

  // we can do switch cases for layout for perticular page
  // switch (key) {
  //   case value:

  //     break;

  //   default:
  //     break;
  // }

  return (
    <div>
      <Navbar />
      {isUserLoggedIn && (
        <PageWrapper>
          <SideBar />
          <div className="page_right_content">{children}</div>
        </PageWrapper>
      )}
      {!isUserLoggedIn && children}
    </div>
  );
}

export default Layout;
