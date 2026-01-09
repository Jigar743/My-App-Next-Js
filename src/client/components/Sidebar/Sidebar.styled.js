import styled from "styled-components";

export const SidebarStyled = styled.aside`
  width: 260px;
  height: calc(100vh - 80px);
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 14px;
  padding: 20px 14px;
  margin-left: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  li {
    position: relative;
    padding: 12px 14px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    color: #374151;
    transition: all 0.2s ease;

    &:hover {
      background: #f3f4f6;
    }

    &.active {
      background: #eef2ff;
      color: #4338ca;
      font-weight: 600;
    }

    &.active::before {
      content: "";
      position: absolute;
      left: -14px;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 60%;
      border-radius: 4px;
      background: #6366f1;
    }
  }
`;
