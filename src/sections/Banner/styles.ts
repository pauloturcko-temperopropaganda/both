import styled from "styled-components";

const marginX = "13.02%";

export const BannerWrapper = styled.section<{ $bg: string }>`
  position: relative;
  width: 100%;
  aspect-ratio: 1920 / 966;
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-position: top center;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const VisuallyHidden = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const MobileBannerImg = styled.img`
  display: none;
  width: 100%;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
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
  width: 19%;
  display: flex;
  align-items: center;
  gap: 4%;

  img {
    height: auto;
  }

  img:nth-child(1) {
    width: 32%;
  }

  img:nth-child(2) {
    width: 31.5%;
  }

  img:nth-child(3) {
    width: 28.5%;
  }
`;
