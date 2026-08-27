import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Fonts } from "./styles/Fonts";
import { theme } from "./styles/theme";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <Fonts />
    <GlobalStyles />
    <App />
  </ThemeProvider>
);
