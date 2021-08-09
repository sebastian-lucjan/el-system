import React from 'react';
import * as PropTypes from 'prop-types';
import Header from '../../Header/Header';
import Hero from '../../Hero/Hero';
import { StyledStartPage } from './StartPage.styles';

const StartPage = ({ name }) => (
  <StyledStartPage name={name}>
    <Header />
    <Hero />
  </StyledStartPage>
);

StartPage.propTypes = { name: PropTypes.string.isRequired };

export default StartPage;
