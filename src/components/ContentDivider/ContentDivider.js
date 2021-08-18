import React from 'react';
import styled from 'styled-components';

const ContentDivider = styled.div`
  width: 120px;
  background-color: white;
  height: 5px;
  margin: 35px;

  @media (${({ theme }) => theme.breakpoints.xxl}) {
    height: 10px;
    margin: 70px;
  }
`;

export default ContentDivider;
