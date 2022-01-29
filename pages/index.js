import MainTemplate from 'providers/MainTemplate';
import HeadMeta from 'components/HeadMeta';
import axios from 'axios';
import ImagesDataContext from '../context/imagesDataContext';

export const getStaticProps = async () => {
  const slidesData = await axios
    .post(
      'https://graphql.datocms.com/',
      {
        query: `
          {
            allSlides {
              image {
                url
              }
              altDescription
              title
            }
          }
        `,
      },
      {
        headers: {
          authorization: `Bearer ${process.env.API_KEY_DATOCMS_TOKEN}`,
        },
      },
    )
    .then(({ data: { data } }) => data)
    .catch((error) => console.log(error.message)); // todo: handle with error

  return {
    props: { slidesData },
  };
};

export default function Root({ slidesData }) {
  return (
    <ImagesDataContext.Provider value={slidesData}>
      <HeadMeta title="elsystem | usługi z branży elektroenergetycznej" />
      <MainTemplate />
    </ImagesDataContext.Provider>
  );
}

// todo: fix routing -> all other paths redirect to "/"
/*  <Route to="*"> */
/*    <Redirect to="/" /> */
/*  </Route> */
