import styled from "styled-components";

export const UsersWrapper = styled.div`
  max-width: 600px;
  margin-top: 20px;
`;

export const UsersTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const UsersListStyled = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const UserItem = styled.li`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border-radius: 10px;

  background: ${({ isYou, theme }) =>
    isYou
      ? `${theme.colors.primary}14`
      : theme.colors.surface};

  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const Avatar = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  text-transform: uppercase;
  flex-shrink: 0;
`;

export const UserName = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const YouBadge = styled.span`
  margin-left: 8px;
  font-size: 12px;
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  padding: 2px 8px;
  border-radius: 999px;
`;
