import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import styled from 'styled-components';

const StyledLoader = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 50%;
  left: 50%;
`;

const Loader = () => (
  <StyledLoader className="page-loading__wrapper">
    <PropagateLoader color="#ccc" size={10} className="page-loading__loader" />
  </StyledLoader>
);

export default Loader;
