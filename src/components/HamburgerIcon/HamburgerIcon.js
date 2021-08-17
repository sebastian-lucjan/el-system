import React from 'react';
import { HamburgerSqueeze } from 'react-animated-burgers';

const HamburgerIcon = ({ isActive, toggleButton }) => (
  <HamburgerSqueeze
    barColor="white"
    toggleButton={toggleButton}
    isActive={isActive}
    buttonHeight={24}
    buttonStyle={{ padding: '20px' }}
  />
);

export default HamburgerIcon;
