import styled from 'styled-components';

export const StyledStartPage = styled.div`
  // mobile
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

  // mobile large
  @media (${({ theme }) => theme.devices.sm}) {
    .start-page__image {
      width: 50vw;
      bottom: 10vh;
    }
  }

  // mobile small and medium landscape
  @media (orientation: landscape) {
    .start-page__image {
      height: 60vh;
      width: unset;
    }
  }
`;
