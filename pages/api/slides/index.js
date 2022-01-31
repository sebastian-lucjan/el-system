import getSlides from 'services/getSlides';

export default async (req, res) => {
  const slides = await getSlides();
  res.status(200).json(slides);
};
