import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../Sidebar/SideBar";
import { AuthContext } from "../../context/Auth/Auth";
import {
  GlobalLayoutStyle,
  PageRightContainer,
  PageWrapper,
} from "./Layout.styled";
import { useRouter } from "next/router";
import { sidebarHideRoutes } from "@/utils/helper";
import UsersSettingSidebar from "../UsersSettingSidebar/UsersSettingSidebar";

function Layout({ children }) {
  const { isUserLoggedIn } = useContext(AuthContext);
  const route = useRouter();

  // we can do switch cases for layout for perticular page
  // switch (key) {
  //   case value:

  //     break;

  //   default:
  //     break;
  // }

  return (
    <GlobalLayoutStyle>
      <Navbar />
      {isUserLoggedIn && (
        <PageWrapper>
          {!sidebarHideRoutes.includes(route.pathname) ? (
            <SideBar />
          ) : (
            <UsersSettingSidebar />
          )}
          <PageRightContainer>{children}</PageRightContainer>
        </PageWrapper>
      )}
      {!isUserLoggedIn && children}
    </GlobalLayoutStyle>
  );
}

export default Layout;
