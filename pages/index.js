import MainTemplate from 'providers/MainTemplate';
import { Head } from 'next/document';

export default function Root() {
  return (
    <>
      <Head>
        <title>elsystem | usługi z branży elektroenergetycznej</title>
      </Head>
      <MainTemplate />
    </>
  );
}

// todo: fix routing -> all other paths redirect to "/"
/*  <Route to="*"> */
/*    <Redirect to="/" /> */
/*  </Route> */
