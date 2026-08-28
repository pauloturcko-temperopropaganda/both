import styled from "styled-components";

export const RepresentanteWrapper = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 90px ${({ theme }) => theme.spacing.containerX};
  scroll-margin-top: 110px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 72px 56px;
    scroll-margin-top: 100px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 56px 24px;
    scroll-margin-top: 70px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 40px 16px;
    scroll-margin-top: 60px;
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

export const Title = styled.h2`
  font-size: 56px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 32px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 24px;
  }
`;

export const TitleLetter = styled.span<{ $family: string }>`
  font-family: ${({ $family }) => $family};
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.basicSans.family};
  font-weight: ${({ theme }) => theme.fonts.basicSans.weights.regular};
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9375rem;
  }
`;

export const PhotoRow = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 40px;
  margin-left: -12rem;
  margin-right: -12rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: -3rem;
    margin-right: -3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 12px;
    margin-top: 32px;
    margin-left: 0;
    margin-right: 0;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Photo = styled.img`
  flex: 1 1 0;
  min-width: 0;
  aspect-ratio: 364 / 450;
  object-fit: cover;
  border-radius: 8px;
  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex: 0 0 100%;
    scroll-snap-align: center;
  }
`;

export const Highlight = styled.p`
  font-family: ${({ theme }) => theme.fonts.basicSans.family};
  font-weight: ${({ theme }) => theme.fonts.basicSans.weights.bold};
  font-size: 1.375rem;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.125rem;
  }
`;
