import '../styles/globals.css';
import 'reflect-metadata';
import { QueryClientProvider, QueryClient } from "react-query";

import { ThemeProvider } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PageWrapper } from 'components';
import type { AppProps } from 'next/app';

import { theme } from '../theme/defaultTheme';
import { CssBaseline } from '@mui/material';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
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
