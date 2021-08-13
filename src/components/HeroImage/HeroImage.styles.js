import styled from 'styled-components';

const StyledHeroImage = styled.div`
  width: 50vw;
  height: 100%;
  overflow: hidden;

  img {
    position: relative;
    width: calc(50vw - 20px);
    padding-right: 20px;
    //width: 100%;
    height: 50vh;
    object-fit: cover;
    object-position: left bottom;
  }
  //.slick-active > div {
  //  background-color: white;
  //}
`;

export default StyledHeroImage;
