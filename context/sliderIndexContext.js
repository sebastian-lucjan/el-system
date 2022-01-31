import { createContext } from 'react';

const SliderContext = createContext({ slideIndex: 0, setSlideIndex: () => {}, sliderDataUpdated: {} });

export default SliderContext;
