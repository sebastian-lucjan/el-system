import styled from 'styled-components';
import React from 'react';

const StyledContactOffice = styled.section`
  //base
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: center;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: ${({ theme }) => theme.fontWeight.extraLight};
  width: 100%;

  .contact-info__title {
    font-weight: 600;
  }

  .contact-info__details {
    font-style: normal;
    line-height: 20px;
  }

  .contact-info__office {
    padding-top: ${({ theme }) => theme.baseSpacing};
  }

  .contact-info__email-link {
    color: ${({ theme }) => theme.colors.white};
  }

  //mobile small
  @media (${({ theme }) => theme.devices.xxs}) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  //mobile medium
  @media (${({ theme }) => theme.devices.xs}) {
    font-size: ${({ theme }) => theme.fontSize.m};

    .contact-info__title {
      padding-bottom: 10px;
    }

    .contact-info__details {
      line-height: 24px;
    }
  }

  //mobile large
  @media (${({ theme }) => theme.devices.sm}) {
    justify-content: flex-start;
  }

  //Desktop landscape for medium resolution
  @media (${({ theme }) => theme.devices.xxl}) {
    width: 900px;
    font-size: ${({ theme }) => theme.fontSize.m};
    padding: 35px 0;
  }
`;

export default StyledContactOffice;
