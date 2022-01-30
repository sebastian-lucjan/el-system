import { createContext } from 'react';

const SliderIndexContext = createContext({ slideIndex: 0, setSlideIndex: () => {} });

export default SliderIndexContext;
