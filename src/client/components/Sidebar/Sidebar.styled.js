import styled from "styled-components";

export const SidebarStyled = styled.div`
  width: 25%;
  border-radius: 5px;
  padding: 10px 0;
  height: 100%;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.1);

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    li {
      padding: 10px;
      cursor: pointer;
      border-top: 1px solid rgba(0, 0, 0, 0.2);
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      &.active {
        color: blueviolet;
        text-decoration: underline;
      }
      &:first-child {
        border-top: 2px solid rgba(0, 0, 0, 0.2);
      }
      &:last-child {
        border-bottom: 2px solid rgba(0, 0, 0, 0.2);
      }
    }
  }
`;
