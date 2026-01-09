import React from "react";
import { SidebarStyled } from "./Sidebar.styled";
import { sidebarList } from "../../../utils/helper";
import { useRouter } from "next/router";

export default function SideBar() {
  const router = useRouter();

  return (
    <SidebarStyled>
      <ul>
        {sidebarList.map((sl, idx) => {
          const isActive = router.pathname === sl.redirection;

          return (
            <li
              key={idx}
              className={isActive ? "active" : ""}
              onClick={() => router.push(sl.redirection)}
            >
              {sl.title}
            </li>
          );
        })}
      </ul>
    </SidebarStyled>
  );
}
