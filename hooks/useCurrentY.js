import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { mainInitialState } from 'data/mainReducerData';

const useCurrentY = () => {
  const [currentPositionY, setCurrentPositionY] = useState(mainInitialState.pageY);

  const handleScroll = () => setCurrentPositionY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 50));
    return () => window.removeEventListener('scroll', debounce(handleScroll));
  }, [currentPositionY]);

  return currentPositionY;
};

export default useCurrentY;
