import { ThemeProvider } from '@mui/material';
import { AppContextProvider } from 'hooks/AppContext';
import type { AppProps } from 'next/app';
import theme from 'theme';
import 'config/i18n';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
