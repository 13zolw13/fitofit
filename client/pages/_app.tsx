import '../styles/globals.css';
import 'reflect-metadata';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PageWrapper } from 'components';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient,QueryClientProvider } from "react-query";

import { theme } from '../theme/defaultTheme';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>El Trackero</title>
          </Head>
          <CssBaseline />
          <PageWrapper>
            <Component {...pageProps} />
          </PageWrapper>
        </ThemeProvider>
      </LocalizationProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
