import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/globalStyles';
import { theme } from 'styles/theme';
import { Head } from 'next/document';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>elsystem | usługi z branży elektroenergetycznej</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
