import MainTemplate from 'providers/MainTemplate';
import HeadMeta from 'components/HeadMeta';
import ImagesDataContext from 'context/imagesDataContext';
import getSlides from 'services/getSlides';
import axios from 'axios';
import useSWR from 'swr';

export const getStaticProps = async () => {
  const slidesData = await getSlides();

  return {
    // revalidate: 30,
    props: { slidesData },
  };
};

const dataFetcher = (url) => axios.get(url).then((res) => res.data);

export default function Root({ slidesData }) {
  const { data: slidesDataCurrent } = useSWR('/api/slides', dataFetcher, { initialData: slidesData });

  const passedData = typeof slidesDataCurrent !== 'undefined' ? slidesDataCurrent : slidesData;

  return (
    <ImagesDataContext.Provider value={passedData}>
      <HeadMeta title="elsystem | usługi z branży elektroenergetycznej" />
      <MainTemplate />
    </ImagesDataContext.Provider>
  );
}

// todo: fix routing -> all other paths redirect to "/"
/*  <Route to="*"> */
/*    <Redirect to="/" /> */
/*  </Route> */
