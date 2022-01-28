import MainTemplate from 'providers/MainTemplate';
import { Head } from 'next/document';

export default function Root() {
  return (
    <>
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
        <title>elsystem | usługi z branży elektroenergetycznej</title>
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
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;700&family=Work+Sans:wght@200;300;400;600&display=swap"
          rel="stylesheet"
        />
        <meta name="robots" content="noindex" />
      </Head>
      <MainTemplate />
    </>
  );
}

// todo: fix routing -> all other paths redirect to "/"
/*  <Route to="*"> */
/*    <Redirect to="/" /> */
/*  </Route> */
