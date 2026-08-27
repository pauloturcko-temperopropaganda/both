import styled from "styled-components";

export const TrajetoriaWrapper = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 90px ${({ theme }) => theme.spacing.containerX};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 72px 56px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 56px 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 40px 16px;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 0 12rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0;
  }
`;

export const Title = styled.p`
  font-size: 64px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.background};
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 44px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 26px;
  }
`;

export const TitleLetter = styled.span<{ $family: string }>`
  font-family: ${({ $family }) => $family};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ListItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.basicSans.family};
  font-weight: ${({ theme }) => theme.fonts.basicSans.weights.regular};
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.white};

  &::before {
    content: "• ";
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9375rem;
  }
`;

export const HighlightCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 2.5rem;
  }
`;

export const HighlightCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: 1.75rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 90%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    padding: 1.25rem;
  }
`;

export const HighlightTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.tusker.bold6700};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.background};
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.25rem;
  }
`;

export const HighlightText = styled.p`
  font-family: ${({ theme }) => theme.fonts.basicSans.family};
  font-weight: ${({ theme }) => theme.fonts.basicSans.weights.bold};
  font-size: 1.125rem;
  line-height: 1.4;
  width: 60%;
  color: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 85%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    font-size: 1rem;
  }
`;
