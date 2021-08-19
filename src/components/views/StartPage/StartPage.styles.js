import styled from 'styled-components';

export const StyledStartPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;

  .start-page__image {
    position: absolute;
    bottom: 15vh;
    margin: 0 auto;
    width: 60vw;
    z-index: ${({ theme }) => theme.zIndex.highPriority};
  }

  @media (${({ theme }) => theme.devices.sm}) {
    .start-page__image {
      width: 50vw;
      bottom: 10vh;
    }
  }

  @media (${({ theme }) => theme.devices.xxl}) {
    display: block;
    img {
      position: static;
    }
  }
`;
