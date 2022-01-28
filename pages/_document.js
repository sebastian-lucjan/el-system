import Document, { Html, Head, Main, NextScript } from 'next/document';
// import Document, { Html, Head, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';

// class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx);
//     return { ...initialProps };
//   }
//
//   render() {
//     return (
//       <Html lang="pl-PL">
//         <Head />
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }
//
// export default MyDocument;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pl">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="icon" type="image/png" href=".icons/favicon.ico" />
          <link rel="apple-touch-icon" sizes="152x152" href="./icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="./icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="./icons/favicon-16x16.png" />
          <link rel="manifest" href="./icons/site.webmanifest" />
          <link rel="mask-icon" href="./icons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="title" content="elsystem | usługi z branży elektroenergetycznej" />
          <meta
            name="description"
            content="Zajrzyj i napisz do nas. Oferujemy usługi w zakresie fotowoltaiki, projektowania i wykonawstwa sieci elektroenergetycznych SN i nn, nadzoru inwestorskiego, prowadzenia inwestycji, doradztwa i kierowania robotami budowlanymi w branży elektroenergetycznej..."
          />
          <meta
            name="keywords"
            content="elsystem, el system, el-system, elsystem lublin, sieci elektroenergetyczne, branża elektroenergetyczna lublin, projekty instalacji elektrycznych, fotowoltaika lublin"
          />
          <meta name="robots" content="all" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700&family=Work+Sans:wght@200;300;400;500;600&display=swap"
            rel="stylesheet"
          />
          <meta name="robots" content="noindex" />
          <title>elsystem | usługi z branży elektroenergetycznej</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// import Document, { Html, Head, Main, NextScript } from 'next/document';
// // Import styled components ServerStyleSheet
// import { ServerStyleSheet } from 'styled-components';
//
// export default class MyDocument extends Document {
//   static getInitialProps({ renderPage }) {
//     // Step 1: Create an instance of ServerStyleSheet
//     const sheet = new ServerStyleSheet();
//
//     // Step 2: Retrieve styles from components in the page
//     const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
//
//     // Step 3: Extract the styles as <style> tags
//     const styleTags = sheet.getStyleElement();
//
//     // Step 4: Pass styleTags as a prop
//     return { ...page, styleTags };
//   }
//
//   render() {
//     return (
//       <Html lang="pl">
//         <Head>
//           <title>My page</title>
//           {/* Step 5: Output the styles in the head  */}
//           {this.props.styleTags}
//         </Head>
//         <body>
//         <Main />
//         <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }
