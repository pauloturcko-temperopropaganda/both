import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled.div<{ $fadeOut: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  opacity: ${({ $fadeOut }) => ($fadeOut ? 0 : 1)};
  pointer-events: ${({ $fadeOut }) => ($fadeOut ? "none" : "auto")};
  transition: opacity 0.4s ease;
`;

export const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid rgba(255, 255, 255, 0.25);
  border-top-color: ${({ theme }) => theme.colors.background};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;
