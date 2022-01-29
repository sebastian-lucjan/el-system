import styled from 'styled-components';

const ViewWrapper = styled.div`
  //mobile
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 84px 20px 20px 20px; //84px -> 64px (header height) + 20px (baseSpace)
  position: relative;

  .image {
    position: absolute;
    bottom: 0;
    max-width: 100vw;
  }

  .start-page__image {
    max-height: 40vh;
  }

  .contact__image-wrapper {
    background-color: #fff;
    max-width: 1200px;
  }
  .contact__image {
    max-width: 1200px;
    max-height: 30vh;
  }

  //iPad and large mobile landscape
  @media (${({ theme }) => theme.devices.md}) {
    padding: 100px 20px 20px 20px;
  }

  //Desktop landscape for medium resolution
  @media (${({ theme }) => theme.devices.xxl}) {
    padding: 100px;
    line-height: 24px;
  }
`;

export default ViewWrapper;
