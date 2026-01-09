import styled from "styled-components";
import { DatePicker } from "antd";

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  height: 42px;
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textPrimary};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &.ant-picker-focused {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}33`};
  }

  input {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const PageHeader = styled.div`
  max-width: 640px;
  margin-bottom: 24px;

  h1 {
    font-size: 28px;
    font-weight: 700;
    margin: 0;
  }

  p {
    margin-top: 6px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 4px 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 700px;
`;

export const ProfileCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 16px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
`;

export const SectionTitle = styled.h3`
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const AvatarSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const UploadBtn = styled.label`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    background: ${({ theme }) => theme.colors.surface};
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const Input = styled.input`
  height: 42px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;

  &:disabled {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}33`};
  }
`;

export const Select = styled.select`
  height: 42px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;

export const Button = styled.button`
  background: ${({ secondary, theme }) =>
    secondary ? theme.colors.background : theme.colors.primary};
  color: ${({ secondary, theme }) =>
    secondary ? theme.colors.textPrimary : "#fff"};

  border: 1px solid
    ${({ secondary, theme }) =>
      secondary ? theme.colors.border : "transparent"};

  padding: 10px 16px;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const DateFieldWrapper = styled.div`
  position: relative;
`;

export const DateIcon = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
  pointer-events: none;
`;

export const HelperText = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StatusBadge = styled.span`
  background: ${({ active, theme }) =>
    active ? `${theme.colors.success}22` : `${theme.colors.danger}22`};

  color: ${({ active, theme }) =>
    active ? theme.colors.success : theme.colors.danger};

  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const AvatarCircle = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: 28px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

