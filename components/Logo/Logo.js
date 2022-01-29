import { useContext } from 'react';
import PageContext from 'data/pageContextData';
import { websiteData } from 'data/appTextData';
import StyledLogo from './Logo.styles';

const Logo = () => {
  const { mobile } = useContext(PageContext);

  return (
    <StyledLogo to="home" spy smooth duration={mobile ? 0 : 800} alt="elsystem" title="elsystem ">
      <h1>{websiteData.logo}</h1>
    </StyledLogo>
  );
};

export default Logo;
