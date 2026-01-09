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
  background: #ffffff;
  padding: 16px 20px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
`;

export const TodoTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
`;

export const AddButton = styled.button`
  background: #6366f1;
  color: #ffffff;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background 0.2s ease;

  &:hover {
    background: #4f46e5;
  }
`;

export const LoadingText = styled.div`
  font-size: 14px;
  color: #6b7280;
`;

export const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const TodoCard = styled.div`
  background: #ffffff;
  border-radius: 14px;
  padding: 16px 20px;
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
  color: #374151;
  margin: 0;

  span {
    font-weight: 500;
    color: #111827;
  }
`;

export const EmptyState = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  color: #6b7280;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
`;
