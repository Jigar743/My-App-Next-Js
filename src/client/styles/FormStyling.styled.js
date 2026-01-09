import styled from "styled-components";

export const FormContainer = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const FormCard = styled.div`
  width: 100%;
  max-width: 420px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};

  /* background: #ffffff; */
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 14px;
    font-weight: 500;
    color: #374151;
  }
`;

export const Input = styled.input`
  height: 44px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  padding: 0 14px;
  font-size: 14px;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
  }
`;

export const Button = styled.button`
  margin-top: 6px;
  height: 44px;
  border-radius: 10px;
  border: none;
  background: #6366f1;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #4f46e5;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const FormFooter = styled.div`
  margin-top: 16px;
  font-size: 14px;
  color: #6b7280;

  a {
    color: #6366f1;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
