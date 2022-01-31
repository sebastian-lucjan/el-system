import MainTemplate from 'providers/MainTemplate';
import HeadMeta from 'components/HeadMeta';
import ImagesDataContext from 'context/imagesDataContext';
import getSlides from 'services/getSlides';

export const getStaticProps = async () => {
  const slidesData = await getSlides();

  return {
    // revalidate: 30,
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
