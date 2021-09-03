import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

const StyledCookies = styled.aside`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  background-color: #121212cc; //bgc "121212" with opacity "cc"
  padding: 5px;

  .cookies__link {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Cookies = ({ handleCookiesDismiss }) => (
  <StyledCookies>
    Strona korzysta z plików cookies. Więcej na:{' '}
    <a href="https://wszystkoociasteczkach.pl/" className="cookies__link" target="black">
      Wszystko o ciasteczkach
    </a>
    <Icon
      tabIndex={0}
      onClick={handleCookiesDismiss}
      onKeyDown={(e) => {
        if (e.keyCode === 13) {
          handleCookiesDismiss();
        }
      }}
      className="short-contact-exit"
      icon="feather:x"
    />
  </StyledCookies>
);

Cookies.propTypes = { handleCookiesDismiss: PropTypes.func.isRequired };

export default Cookies;
