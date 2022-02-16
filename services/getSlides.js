import axios from 'axios';

const getSlides = async () => {
  const slides = await axios
    .post(
      'https://graphql.datocms.com/',
      {
        query: `
          {
            allSlides {
              image {
                url
              }
              id
              altDescription
              title
              description
              slidesOrder
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
    .then(({ data: { data } }) =>
      data.allSlides.sort((currSlide, nextSlide) => currSlide.slidesOrder - nextSlide.slidesOrder),
    )
    .catch((error) => console.log('ERROR -> ', error.message)); // todo: handle with error

  return slides;
};

export default getSlides;
