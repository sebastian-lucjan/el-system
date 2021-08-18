import styled from 'styled-components';

export const ViewWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: ${({ centered }) => (centered ? 'centered' : 'flex-start')};
  padding: 84px 20px 20px 20px;
  line-height: 24px;

  @media (${({ theme }) => theme.breakpoints.xxl}) {
    padding: 100px;
  }
`;
