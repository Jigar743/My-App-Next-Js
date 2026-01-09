import React, { useContext } from "react";
import { useRouter } from "next/router";
import Navbar from "../Navbar/Navbar";
import SideBar from "../Sidebar/SideBar";
import { AuthContext } from "../../context/Auth/Auth";
import { LayoutRoot, PageWrapper, ContentWrapper } from "./Layout.styled";

function Layout({ children }) {
  const { isUserLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  // Pages where sidebar should NOT appear
  const noSidebarRoutes = [
    "/users/edit-user",
    "/login",
    "/signup",
    "/forget-password",
  ];

  const hideSidebar = noSidebarRoutes.includes(router.pathname);
  const centeredRoutes = ["/users/edit-user"];
  const isCentered = centeredRoutes.includes(router.pathname);

  return (
    <LayoutRoot>
      <Navbar />

      {isUserLoggedIn && !hideSidebar ? (
        <PageWrapper>
          <SideBar />
          <ContentWrapper>{children}</ContentWrapper>
        </PageWrapper>
      ) : (
        <ContentWrapper $centered={isCentered}>{children}</ContentWrapper>
      )}
    </LayoutRoot>
  );
}

export default Layout;
