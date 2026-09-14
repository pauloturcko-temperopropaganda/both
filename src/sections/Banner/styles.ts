import styled from "styled-components";

const marginX = "13.02%";
const mobileMarginX = "10.9%";

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

export const MobileBannerWrapper = styled.section<{ $bg: string }>`
  display: none;
  position: relative;
  width: 100%;
  aspect-ratio: 1080 / 1350;
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-position: bottom center;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

export const MobileTextBlock = styled.img`
  position: absolute;
  left: ${mobileMarginX};
  top: 10%;
  width: 33%;
  height: auto;
  z-index: 2;
`;

export const MobileLogoBlock = styled.img`
  position: absolute;
  left: ${mobileMarginX};
  top: 42%;
  width: 33%;
  height: auto;
  z-index: 2;
`;

export const MobilePhotoImg = styled.img`
  position: absolute;
  right: -10%;
  bottom: 2.6%;
  width: 85%;
  height: auto;
  z-index: 1;
`;

/* Larguras calculadas para que os três logos fiquem com a mesma altura,
   já que cada arquivo tem uma proporção diferente. */
export const MobileCoalition = styled.div`
  position: absolute;
  left: ${mobileMarginX};
  bottom: 8.5%;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2;

  img {
    height: auto;
  }

  /* joao_rodrigues (2.824) */
  img:nth-child(1) {
    width: 100%;
  }

  /* lunelli (2.792) */
  img:nth-child(2) {
    width: 98.9%;
  }

  /* amin (2.506) */
  img:nth-child(3) {
    width: 88.7%;
  }

  img + img {
    margin-top: 4%;
  }
`;

export const MobileBottomLeft = styled.img`
  position: absolute;
  left: ${mobileMarginX};
  bottom: 3.5%;
  width: 40%;
  height: auto;
  z-index: 2;
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
