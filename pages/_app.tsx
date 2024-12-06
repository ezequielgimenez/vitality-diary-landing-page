// pages/_app.tsx

import "./styles/global.css";
import "aos/dist/aos.css"; // Importa los estilos de AOS
import { useEffect } from "react";
import AOS from "aos";
import { appWithTranslation } from "next-i18next";
import "../i18n";

///mui
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Esto aplicará los estilos globales base de MUI */}
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default appWithTranslation(MyApp);
