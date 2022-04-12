import { CssBaseline, ThemeProvider } from '@mui/material';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { theme } from '../theme/defaultTheme';
import 'reflect-metadata';
import { PageWrapper } from 'components';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PageWrapper>
          <Component {...pageProps} />
        </PageWrapper>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default MyApp;
