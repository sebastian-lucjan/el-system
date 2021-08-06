import styled from 'styled-components';
import React from 'react';

const StyledContactOffice = styled.section`
  width: 900px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 300;
  padding: 35px 0;

  .contact-info__title {
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 400;
    //padding-bottom: 10px;
  }

  .contact-info__details {
    font-style: normal;
    line-height: 20px;
  }

  .contact-info__office {
    padding-bottom: 20px;
  }
`;

export default StyledContactOffice;

// "contact-info__title"
// "contact-info__details"
