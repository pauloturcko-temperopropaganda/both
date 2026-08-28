import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.containerX} 32px;
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 12px 16px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 28px;
  background-color: ${({ theme }) => theme.colors.greenAlt};
  border-radius: 0 0 0.75rem 0.75rem;
  padding: 0.825rem 2rem;
  pointer-events: auto;

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
