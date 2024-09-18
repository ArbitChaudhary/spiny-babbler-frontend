import { EmotionCache } from '@emotion/cache';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import createEmotionCache from '../config/create-emotion-cache';
import { theme } from '../config/theme';
import { UserProvider } from '../contexts/user.context';
import '../styles/globals.scss';
import { NextPageWithLayout } from './page';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <UserProvider>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            <meta charSet="utf-8" />
          </Head>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </LocalizationProvider>
      </UserProvider>
    </CacheProvider>
  );
}
