import React, { useEffect, useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import { HamburgerSqueeze } from 'react-animated-burgers';
import { animateScroll } from 'react-scroll';
import { websiteData } from '../../data/appTextData';
import { StyledNavigation, StyledNavLink } from './Navigation.styles';

const Navigation = ({ visibleHamburger, handleChangeActiveMobileNav, mobile: mobileDevice }) => {
  const [isActiveMobileNav, setIsActiveMobileNav] = useState(false);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { navigation: buttonsDataArray } = websiteData;

  const navLink = useRef(null);

  // const enterNavElement = (ref) => {
  //   console.log(ref);
  //   ref.current.dispatchEvent(
  //     new MouseEvent('click', {
  //       view: window,
  //       bubbles: true,
  //       cancelable: true,
  //       buttons: 1,
  //     })
  //   );
  // };

  const simulateClick = (e, name) => {
    if (e.keyCode === 13) {
      console.log(navLink.current);
      console.log(name);
      console.log(navLink.current.props.to);
      // navLink.current.dispatchEvent(
      //   new MouseEvent('click', {
      //     view: window,
      //     bubbles: true,
      //     cancelable: true,
      //     buttons: 1,
      //   })
      // );
      animateScroll.scrollTo(name, { smooth: true });
    }
  };

  const navButtons = buttonsDataArray.map(({ buttonText, name }, index) => (
    <StyledNavLink
      to={name}
      spy
      smooth
      duration={mobileDevice && isActiveMobileNav ? 0 : 800}
      key={buttonText}
      onClick={() => {
        handleChangeActiveMobileNav();
        setIsActiveMobileNav(!isActiveMobileNav);
      }}
      tabIndex={index + 1}
      ref={navLink}
      onKeyDown={(e) => simulateClick(e, name)}
    >
      {buttonText}
    </StyledNavLink>
  ));
  // useEffect(() => {
  //   animateScroll.scrollToBottom();
  //   console.log('test current');
  // }, []);

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia(`(min-width: ${borderMediaValue}px)`);
  //   mediaQuery.addEventListener('change', () => {
  //     setVisibleHamburger(checkNeedBurgerMenu());
  //   });
  //
  //   return () => {
  //     mediaQuery.removeEventListener('change', () => {
  //       setVisibleHamburger(checkNeedBurgerMenu());
  //     });
  //   };
  // }, [visibleHamburger]);

  const setHamburgerWith = () => {
    // const windowWidth = window.innerWidth;
    // console.log(windowWidth); // TODO: handle Hamburger icon resizing
  };

  setHamburgerWith();

  return (
    <>
      {visibleHamburger && (
        <HamburgerSqueeze
          barColor="white"
          isActive={isActiveMobileNav}
          buttonWidth={32}
          buttonStyle={{ padding: '20px 20px' }}
          onClick={() => {
            handleChangeActiveMobileNav();
            setIsActiveMobileNav(!isActiveMobileNav);
          }}
        />
      )}
      {(isActiveMobileNav || !mobileDevice) && <StyledNavigation>{navButtons}</StyledNavigation>}
    </>
  );
};

Navigation.defaultProps = { handleChangeActiveMobileNav: () => {}, mobile: false };

Navigation.propTypes = {
  visibleHamburger: PropTypes.bool.isRequired,
  handleChangeActiveMobileNav: PropTypes.func,
  mobile: PropTypes.bool,
};

export default Navigation;
