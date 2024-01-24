import styled from "styled-components";

export const FileUploadStyled = styled.div`
  .ant-upload {
    border-radius: 50%;
    .upload__btn {
      > div {
        margin-top: 8px;
      }
    }
  }
  .uploaded__file__card {
    .ant-card-body {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;

      .action__btns {
        span {
          font-size: 25px;
          cursor: pointer;
        }
      }
    }
  }
`;
