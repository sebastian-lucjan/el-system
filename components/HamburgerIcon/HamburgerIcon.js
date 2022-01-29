import { HamburgerSqueeze } from 'react-animated-burgers';

const HamburgerIcon = ({ isActive, toggleButton, handleChangeActiveMobileNav }) => (
  <HamburgerSqueeze
    barColor="white"
    toggleButton={toggleButton}
    isActive={isActive}
    buttonHeight={24}
    buttonStyle={{ padding: '20px' }}
    onClick={handleChangeActiveMobileNav}
  />
);

export default HamburgerIcon;
