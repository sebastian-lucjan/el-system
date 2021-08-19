import React from 'react';
import styled from 'styled-components';

const ContentDivider = styled.div`
  width: 120px;
  background-color: white;
  height: 5px;
  margin: 35px;

  @media (${({ theme }) => theme.devices.xs}) {
    height: 6px;
    margin: 45px;
  }

  @media (${({ theme }) => theme.devices.xs}) {
    height: 7px;
    margin: 50px;
  }

  @media (${({ theme }) => theme.devices.sm}) {
    height: 8px;
    margin: 55px;
  }

  @media (${({ theme }) => theme.devices.md}) {
    height: 8px;
    margin: 60px;
  }

  @media (${({ theme }) => theme.devices.xxl}) {
    height: 10px;
    margin: 70px;
  }
`;

export default ContentDivider;
