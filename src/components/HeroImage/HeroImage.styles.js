import styled from 'styled-components';

const StyledHeroImage = styled.div`
  width: 50vw;
  height: 100%;
  img {
    width: calc(50vw - 20px);
    margin-right: 20px;
  }
  .imgPlaceholder {
    width: calc(50vw - 20px);
    height: 100%;
    margin-right: 20px;
    background-color: lightgrey;
  }
`;

export default StyledHeroImage;
