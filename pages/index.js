import MainTemplate from 'providers/MainTemplate';
import HeadMeta from 'components/HeadMeta';

export default function Root() {
  return (
    <>
      <HeadMeta title="elsystem | usługi z branży elektroenergetycznej" />
      <MainTemplate />
    </>
  );
}

// todo: fix routing -> all other paths redirect to "/"
/*  <Route to="*"> */
/*    <Redirect to="/" /> */
/*  </Route> */
