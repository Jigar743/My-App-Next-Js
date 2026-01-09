import styled from "styled-components";

export const StyledNavbar = styled.header`
  height: 64px;
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  position: sticky;
  top: 0;
  z-index: 50;

  .navbar-brand {
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    user-select: none;
  }

  .navbar-links {
    display: flex;
    align-items: center;
    gap: 14px;

    button {
      background: ${({ theme }) => theme.colors.surface};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: 8px;
      padding: 8px 14px;
      font-size: 14px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.textPrimary};
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  .profile-popover {
    position: relative;

    .popover-btn {
      border-radius: 999px;
      padding: 8px 16px;
    }

    .popover {
      position: absolute;
      top: 52px;
      right: 0;
      width: 180px;
      background: ${({ theme }) => theme.colors.surface};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: 12px;
      padding: 8px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

      display: flex;
      flex-direction: column;
      gap: 6px;

      animation: fadeIn 0.15s ease-out;

      button {
        width: 100%;
        border: none;
        background: transparent;
        padding: 10px 12px;
        border-radius: 8px;
        text-align: left;
        font-size: 14px;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.textPrimary};

        &:hover {
          background: ${({ theme }) => theme.colors.background};
        }
      }

      .logout-btn {
        color: ${({ theme }) => theme.colors.danger};
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ToggleBtn = styled.button`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  padding: 6px 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
