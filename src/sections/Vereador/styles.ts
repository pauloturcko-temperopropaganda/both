import styled, { keyframes } from "styled-components";

export const VereadorWrapper = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
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
  font-size: 56px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.blue};
  margin: 0.5rem 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 30px;
    margin: 0.5rem 0 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 24px;
  }
`;

export const TitleLetter = styled.span<{ $family: string }>`
  font-family: ${({ $family }) => $family};
`;

export const InfoBox = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 12px;
  padding: 32px 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 24px 1rem;
    border-radius: 8px;
  }
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

// Breaks out of every padded ancestor (VereadorWrapper + Content) to reach
// the true edges of the viewport, regardless of how deep it sits in the DOM.
// max-width + overflow-x: hidden (belt-and-suspenders with the global reset)
// stop the 100vw-includes-scrollbar rounding error from ever creating
// horizontal scroll.
export const PhotoGridBreakout = styled.div`
  width: 100vw;
  max-width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: 6rem;
  overflow-x: hidden;

  /* Below tablet the grid is replaced by CarouselSection. */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const PhotoRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
`;

export const Photo = styled.img`
  flex: 1 1 0;
  min-width: 0;
  height: 260px;
  object-fit: cover;
  display: block;
`;

const marquee = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

/* Only rendered below tablet — takes over from PhotoGridBreakout, which
   hides itself past that point. Breaks out to the viewport edges the same
   way, then scrolls its (doubled) track sideways forever. */
export const CarouselSection = styled.div`
  display: none;
  width: 100vw;
  max-width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: 4rem;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 2.5rem;
  }
`;

export const CarouselTrack = styled.div<{ $paused: boolean }>`
  display: flex;
  align-items: center;
  width: max-content;
  gap: 12px;
  padding: 0 12px;
  animation: ${marquee} 45s linear infinite;
  animation-play-state: ${({ $paused }) => ($paused ? "paused" : "running")};
`;

/* Source photos are ~367-370px tall, so these stay under that at every
   breakpoint below — bigger than before, but never upscaled/blurry. */
export const CarouselPhoto = styled.img`
  height: 340px;
  width: auto;
  flex-shrink: 0;
  display: block;
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 260px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    height: 190px;
  }
`;

export const LightboxOverlay = styled.div<{ $visible: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 1000;
  cursor: zoom-out;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 220ms ease-in-out;
`;

export const LightboxImage = styled.img<{ $visible: boolean }>`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  cursor: default;
  transform: scale(${({ $visible }) => ($visible ? 1 : 0.92)});
  transition: transform 220ms ease-in-out;
`;
