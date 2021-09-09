import React from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { StyledCookies } from './Cookies.styles';

const Cookies = ({ handleCookiesPolicyAgree, handleDismissCookiesPopUp }) => (
  <StyledCookies>
    <div className="cookies__content-container">
      Strona korzysta z plików cookies. Więcej na:{' '}
      <a href="https://wszystkoociasteczkach.pl/" className="cookies__link" target="black">
        Wszystko o ciasteczkach
      </a>
      <button
        type="submit"
        className="cookies__accept"
        onClick={handleCookiesPolicyAgree}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleCookiesPolicyAgree();
          }
        }}
        tabIndex={0}
      >
        {' '}
        Ok, akceptuję.
      </button>
    </div>
    <div className="cookies__dismissIcon">
      <Icon
        tabIndex={0}
        onClick={() => handleDismissCookiesPopUp(false)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleDismissCookiesPopUp(false);
          }
        }}
        className="short-contact-exit"
        icon="feather:x"
        aria-hidden={false}
        alt="zamknij okno cookies bez podejmowania decyzji"
      />
    </div>
  </StyledCookies>
);

Cookies.propTypes = {
  handleCookiesPolicyAgree: PropTypes.func.isRequired,
  handleDismissCookiesPopUp: PropTypes.func.isRequired,
};

export default Cookies;
