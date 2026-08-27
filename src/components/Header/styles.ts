import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  padding: 32px ${({ theme }) => theme.spacing.containerX};
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 28px;
  background-color: ${({ theme }) => theme.colors.greenAlt};
  border-radius: 999px;
  padding: 14px 26px;
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
  color: ${({ theme }) => theme.colors.white};

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    opacity: 0.85;
  }
`;
