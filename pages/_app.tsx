import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme } from '../themes/dark-theme';
import { SideProvider } from 'context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
            <>
              <SideProvider>
                <ThemeProvider theme={ darkTheme }>
                  <CssBaseline />
                  <Component {...pageProps} />
                </ThemeProvider>
              </SideProvider>
            </>
    )
}

export default MyApp
