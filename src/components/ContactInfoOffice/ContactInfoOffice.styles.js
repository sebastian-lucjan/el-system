import styled from 'styled-components';
import React from 'react';

const StyledContactOffice = styled.section`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: center;
  //padding-top: 100%;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 300;
  width: 100%;
  //position: absolute;
  //top: 20px;
  //left: 20px;

  .contact-info__title {
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

  @media (${({ theme }) => theme.devices.xxs}) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  @media (${({ theme }) => theme.devices.xs}) {
    font-size: ${({ theme }) => theme.fontSize.m};

    .contact-info__title {
      padding-bottom: 10px;
    }

    .contact-info__details {
      line-height: 24px;
    }
  }

  @media (${({ theme }) => theme.devices.sm}) {
    justify-content: flex-start; //TODO: add bottom img
  }

  @media (${({ theme }) => theme.devices.xxl}) {
    width: 900px;
    font-size: ${({ theme }) => theme.fontSize.m};
    padding: 35px 0;
  }
`;

export default StyledContactOffice;
