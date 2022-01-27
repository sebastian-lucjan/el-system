import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import { Wrapper } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Logo />
    <Navigation />
  </Wrapper>
);

export default Header;
