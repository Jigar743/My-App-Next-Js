import styled from "styled-components";

export const LayoutRoot = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
`;

export const PageWrapper = styled.main`
  display: flex;
  gap: 24px;
  padding: 24px 40px;
  flex: 1;

  @media (max-width: 1024px) {
    padding: 20px;
  }
`;

export const ContentWrapper = styled.section`
  flex: 1;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 16px;
  padding: 40px 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);

  ${({ $centered }) =>
    $centered &&
    `
      display: flex;
      justify-content: center;
    `}

  @media (max-width: 768px) {
    padding: 16px;
  }
`;
