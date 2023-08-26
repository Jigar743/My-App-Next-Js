import React from "react";
import { SidebarStyled } from "./Sidebar.styled";
import { sidebarList } from "../../utils/helper";

export default function SideBar() {
  return (
    <SidebarStyled>
      <ul>
        {sidebarList.map((sl, idx) => (
          <li key={idx}>
            <a href={sl.redirection}>{sl.title}</a>
          </li>
        ))}
      </ul>
    </SidebarStyled>
  );
}
