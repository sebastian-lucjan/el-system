import React from 'react';
import { websiteData } from '../../data/appTextData';
import StyledLogo from './Logo.styles';

const Logo = () => <StyledLogo>{websiteData.logo}</StyledLogo>;

export default Logo;
