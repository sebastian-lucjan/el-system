import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/globalStyles';
import { theme } from 'styles/theme';
import { StrictMode } from 'react';

export default function App({ Component, pageProps }) {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </StrictMode>
  );
}
