import styled from "styled-components";

export const SidebarStyled = styled.div`
  width: 25%;
  background-color: hsl(60deg 1.82% 89.22%);
  border-radius: 10px;
  padding: 20px 40px;
  height: 100vh;
  margin-left: 25px;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    li {
      padding: 5px 10px;
      a {
        text-decoration: none;
        color: black;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
