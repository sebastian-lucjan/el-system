import styled from 'styled-components';

const StyledHeroImageButton = styled.button`
  position: absolute;
  width: 200px;
  height: 60px;
  bottom: 140px;
  left: 140px;
  border: none;
  color: black;
  background-color: white;
  font-size: ${({ theme }) => theme.fontSize.m};
  text-transform: uppercase;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 700;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    //background-color: #475ad7;
    background-color: #47a6ff;
    //background-color: #19647e;
    color: white;
  }
`;

export default StyledHeroImageButton;

// todo: theme colours
