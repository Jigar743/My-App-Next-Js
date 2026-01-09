import { useContext } from "react";
import { ThemeContext } from "@/client/context/Theme/CustomThemeProvider";
// import { MoonOutlined, SunOutlined } from "@ant-design/icons";
// import {} from "@ant-design/icons"
import styled from "styled-components";
// import { ToggleBtn } from "./Navbar.styled";
import {MoonOutlined, SunOutlined} from "@ant-design/icons"

const ToggleBtn = styled.button`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  padding: 6px 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  align-items: center;
`;


// const mode = "light";
function ThemeToggle() {
//   return null;
  const context = useContext(ThemeContext);
  console.log("ThemeContext:", ThemeContext);

  // 🛡️ Defensive guard
  if (!context) return null;

  const { mode, toggleTheme } = context;


  return (
    <ToggleBtn onClick={toggleTheme} aria-label="Toggle theme">
      {mode === "light" ? <MoonOutlined /> : <SunOutlined />}
    </ToggleBtn>
  );
}

export default ThemeToggle;
