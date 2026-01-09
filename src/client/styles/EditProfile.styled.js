import styled from "styled-components";
import { DatePicker } from "antd";

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  height: 42px;
  border-radius: 8px;
  border: 1px solid #d1d5db;

  &:hover {
    border-color: #6366f1;
  }

  &.ant-picker-focused {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
  }

  input {
    font-size: 14px;
  }
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  color: #4f46e5;
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
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
`;

export const SectionTitle = styled.h3`
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
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
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #374151;
`;

export const UploadBtn = styled.label`
  background: #f3f4f6;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  cursor: pointer;
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
    color: #374151;
  }
`;

export const Input = styled.input`
  height: 42px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 14px;

  &:disabled {
    background: #f9fafb;
    color: #6b7280;
  }

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
  }
`;

export const Select = styled.select`
  height: 42px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;

export const Button = styled.button`
  background: ${({ secondary }) => (secondary ? "#f3f4f6" : "#6366f1")};
  color: ${({ secondary }) => (secondary ? "#374151" : "#ffffff")};
  border: none;
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
  color: #6b7280;
  pointer-events: none;
`;

export const HelperText = styled.span`
  font-size: 12px;
  color: #6b7280;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StatusBadge = styled.span`
  background: ${({ active }) => (active ? "#dcfce7" : "#fee2e2")};
  color: ${({ active }) => (active ? "#166534" : "#991b1b")};
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
`;
