import styled from 'styled-components';

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  line-height: 1.4rem;

  @media (${({ theme }) => theme.devices.xxl}) {
    width: 900px;
    justify-content: center;
  }
`;
