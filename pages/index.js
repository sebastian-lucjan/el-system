import MainTemplate from 'providers/MainTemplate';

export default function Root() {
  return (
    <>
      <MainTemplate />
    </>
  );
}

// todo: fix routing -> all other paths redirect to "/"
/*  <Route to="*"> */
/*    <Redirect to="/" /> */
/*  </Route> */
