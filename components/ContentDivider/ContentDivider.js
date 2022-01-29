import styled from 'styled-components';

const ContentDivider = styled.div`
  width: 120px;
  background-color: white;
  height: 5px;
  margin: 35px;

  //mobile medium
  @media (${({ theme }) => theme.devices.xs}) {
    height: 7px;
    margin: 50px;
  }

  //mobile large
  @media (${({ theme }) => theme.devices.sm}) {
    height: 8px;
    margin: 55px;
  }

  //iPad
  @media (${({ theme }) => theme.devices.md}) {
    height: 8px;
    margin: 60px;
  }

  //Desktop landscape for medium resolution
  @media (${({ theme }) => theme.devices.xxl}) {
    height: 10px;
    margin: 70px;
  }

  //iPad landscape
  @media (orientation: landscape) and (${({ theme }) => theme.devices.lg}) {
    height: 10px;
    margin: 70px;
  }
`;

export default ContentDivider;
