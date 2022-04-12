import { CssBaseline, ThemeProvider } from "@mui/material";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { theme } from "../theme/defaultTheme";
import "reflect-metadata";
import { PageWrapper } from "components";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
