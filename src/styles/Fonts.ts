import { createGlobalStyle } from "styled-components";

const base = import.meta.env.BASE_URL;

export const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Basic';
    src: url('${base}fonts/basic/Basic-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'TuskerGrotesk 4500Medium';
    src: url('${base}fonts/tusker-grotesk/TuskerGrotesk-4500Medium.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'TuskerGrotesk 4600Semibold';
    src: url('${base}fonts/tusker-grotesk/TuskerGrotesk-4600Semibold.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'TuskerGrotesk 4700Bold';
    src: url('${base}fonts/tusker-grotesk/TuskerGrotesk-4700Bold.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'TuskerGrotesk 4800Super';
    src: url('${base}fonts/tusker-grotesk/TuskerGrotesk-4800Super.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'TuskerGrotesk 5600Semibold';
    src: url('${base}fonts/tusker-grotesk/TuskerGrotesk-5600Semibold.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'TuskerGrotesk 5700Bold';
    src: url('${base}fonts/tusker-grotesk/TuskerGrotesk-5700Bold.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'TuskerGrotesk 5800Super';
    src: url('${base}fonts/tusker-grotesk/TuskerGrotesk-5800Super.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'TuskerGrotesk 6700Bold';
    src: url('${base}fonts/tusker-grotesk/TuskerGrotesk-6700Bold.woff2') format('woff2');
    font-display: swap;
  }
`;
