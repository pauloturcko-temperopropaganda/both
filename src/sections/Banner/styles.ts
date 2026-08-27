import styled from "styled-components";

// Banner is a fixed-aspect-ratio canvas (1920 / 966) that scales fluidly,
// so every offset/size here is a % of that canvas instead of the theme's
// fixed containerX — that keeps the layered art aligned at any width.
const marginX = "13.02%";

export const BannerWrapper = styled.section<{ $bg: string }>`
  position: relative;
  width: 100%;
  aspect-ratio: 1920 / 966;
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-position: top center;
  overflow: hidden;
`;

export const TextBlock = styled.img`
  position: absolute;
  left: 15%;
  top: 60%;
  transform: translateY(-50%);
  width: 18.13%;
  height: auto;
`;

export const PhotoImg = styled.img`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 47.45%;
  height: auto;
`;

export const LogoBlock = styled.img`
  position: absolute;
  right: 15%;
  top: 60%;
  transform: translateY(-50%);
  width: 20%;
  height: auto;
`;

export const BottomLeft = styled.img`
  position: absolute;
  left: ${marginX};
  bottom: 4.5%;
  width: 23.96%;
  height: auto;
`;

export const BottomRight = styled.div`
  position: absolute;
  right: ${marginX};
  bottom: 4.5%;
  /* Explicit width so the % below resolve against a definite box instead
     of the shrink-to-fit width an absolutely-positioned div would otherwise get. */
  width: 12.81%;
  display: flex;
  align-items: center;
  gap: 6.5%;

  img {
    height: auto;
  }

  img:first-child {
    width: 51.22%;
  }

  img:last-child {
    width: 42.28%;
  }
`;
