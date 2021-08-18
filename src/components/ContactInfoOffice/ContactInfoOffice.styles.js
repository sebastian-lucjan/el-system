import styled from 'styled-components';
import React from 'react';

const StyledContactOffice = styled.section`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: center;
  //padding-top: 100%;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 300;
  width: 100%;
  //position: absolute;
  //top: 20px;
  //left: 20px;

  .contact-info__title {
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: 600;
    //padding-bottom: 10px;
  }

  .contact-info__details {
    font-style: normal;
    line-height: 20px;
  }

  .contact-info__office {
    padding-top: 20px;
  }

  @media (${({ theme }) => theme.breakpoints.xxl}) {
    width: 900px;
    font-size: ${({ theme }) => theme.fontSize.m};
    padding: 35px 0;
  }
`;

export default StyledContactOffice;
