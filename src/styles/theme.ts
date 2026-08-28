export const theme = {
  colors: {
    background: "#febf1a",
    green: "#537e4d",
    greenAlt: "#72a646",
    white: "#ffffff",
    blue: "#0154b9",
  },
  spacing: {
    containerX: "250px",
  },
  breakpoints: {
    tablet: "1024px",
    mobile: "640px",
    small: "380px",
  },
  fonts: {
    basicSans: {
      family: "'Basic', sans-serif",
      weights: {
        regular: 400,
        semiBold: 600,
        bold: 700,
      },
    },
    tusker: {
      medium4500: "'TuskerGrotesk 4500Medium', sans-serif",
      semibold4600: "'TuskerGrotesk 4600Semibold', sans-serif",
      bold4700: "'TuskerGrotesk 4700Bold', sans-serif",
      super4800: "'TuskerGrotesk 4800Super', sans-serif",
      semibold5600: "'TuskerGrotesk 5600Semibold', sans-serif",
      bold5700: "'TuskerGrotesk 5700Bold', sans-serif",
      super5800: "'TuskerGrotesk 5800Super', sans-serif",
      bold6700: "'TuskerGrotesk 6700Bold', sans-serif",
      bold8700: "'TuskerGrotesk 8700Bold', sans-serif",
    },
  },
} as const;

export type Theme = typeof theme;
