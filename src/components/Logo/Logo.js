import { useContext } from 'react';
import { websiteData } from '../../data/appTextData';
import StyledLogo from './Logo.styles';
import { PageContext } from '../../providers/MainTemplate';

const Logo = () => {
  const { mobile } = useContext(PageContext);

  return (
    <StyledLogo to="home" spy smooth duration={mobile ? 0 : 800} alt="elsystem" title="elsystem ">
      <h1>{websiteData.logo}</h1>
    </StyledLogo>
  );
};

export default Logo;
