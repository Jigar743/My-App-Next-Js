import React from "react";
import { SidebarStyled } from "./Sidebar.styled";
import { sidebarList } from "../../../utils/helper";
import { useRouter } from "next/router";

export default function SideBar() {
  const router = useRouter();

  return (
    <SidebarStyled>
      <ul>
        {sidebarList.map((sl, idx) => (
          <li
            key={idx}
            className={router.pathname === sl.redirection ? "active" : ""}
            onClick={() => router.push(sl.redirection)}
          >
            {sl.title}
          </li>
        ))}
      </ul>
    </SidebarStyled>
  );
}
