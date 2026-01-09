import styled from "styled-components";

export const FileUploadStyled = styled.div`
  .ant-upload {
    border-radius: 50%;

    .upload__btn {
      color: ${({ theme }) => theme.colors.textPrimary};

      > div {
        margin-top: 8px;
        font-size: 14px;
      }
    }
  }

  .uploaded__file__card {
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 12px;

    .ant-card-body {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;

      .action__btns {
        span {
          font-size: 22px;
          cursor: pointer;
          color: ${({ theme }) => theme.colors.textSecondary};
          transition: color 0.2s ease;

          &:hover {
            color: ${({ theme }) => theme.colors.primary};
          }
        }
      }
    }
  }
`;
