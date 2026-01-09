import styled from "styled-components";

export const TodoPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TodoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.surface};
  padding: 16px 20px;
  border-radius: 12px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
`;

export const TodoTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const AddButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const LoadingText = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const TodoCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 14px;
  padding: 16px 20px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const TodoText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;

  span {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const EmptyState = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: 20px;
  border-radius: 12px;
  text-align: center;

  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
`;
