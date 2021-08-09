import React from 'react';
import * as PropTypes from 'prop-types';
import Hero from '../../Hero/Hero';
import { StyledStartPage } from './StartPage.styles';

const StartPage = ({ name }) => (
  <StyledStartPage name={name}>
    <Hero />
  </StyledStartPage>
);

StartPage.propTypes = { name: PropTypes.string.isRequired };

export default StartPage;
