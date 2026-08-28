import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 32px ${({ theme }) => theme.spacing.containerX} 0;
  margin-top: auto;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 28px 56px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 24px 24px 0;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding-bottom: 24px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 28px;
  background-color: ${({ theme }) => theme.colors.greenAlt};
  border-radius: 999px;
  padding: 0.825rem 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 10px;
    padding: 8px 14px;
  }
`;

export const NavLink = styled.a<{ $active?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.basicSans.family};
  font-weight: ${({ theme, $active }) =>
    $active
      ? theme.fonts.basicSans.weights.bold
      : theme.fonts.basicSans.weights.regular};
  font-size: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 11px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.white};

  svg {
    width: 18px;
    height: 18px;
    max-width: none;
  }

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const LegalText = styled.p`
  font-family: ${({ theme }) => theme.fonts.basicSans.family};
  font-weight: ${({ theme }) => theme.fonts.basicSans.weights.regular};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 11px;
    white-space: normal;
  }
`;

export const DetailStrip = styled.div`
  width: 100vw;
  max-width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 26px;
  overflow: hidden;
  line-height: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 16px;
  }
`;

export const DetailImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;
