import styled from 'styled-components';

export const StyledStartPage = styled.div`
  height: 100vh;
  width: 100vw;

  img {
    position: absolute;
    bottom: 15vh;
    left: calc(50% - 30vw);
    width: 60vw;
    z-index: ${({ theme }) => theme.zIndex.highPriority};
  }

  @media (${({ theme }) => theme.breakpoints.xxl}) {
    img {
      position: static;
    }
  }
`;
