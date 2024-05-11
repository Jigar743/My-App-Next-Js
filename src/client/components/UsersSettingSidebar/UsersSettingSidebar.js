import React from "react";
import { SidebarStyled } from "../Sidebar/Sidebar.styled";
import { useRouter } from "next/router";
import { userSettingSidebarList } from "@/utils/helper";

export default function UsersSettingSidebar() {
  const Router = useRouter();
  return (
    <SidebarStyled>
      <ul>
        {userSettingSidebarList.map((sl, idx) => (
          <li
            key={idx}
            className={Router.pathname === sl.redirection ? "active" : ""}
            onClick={() => Router.push(sl.redirection)}
          >
            {sl.title}
          </li>
        ))}
      </ul>
    </SidebarStyled>
  );
}
