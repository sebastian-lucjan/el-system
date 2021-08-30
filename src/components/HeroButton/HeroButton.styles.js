import styled from 'styled-components';

const StyledHeroImageButton = styled.button`
  border: none;
  color: ${({ isClicked, theme }) => (isClicked ? theme.colors.white : theme.colors.black)};
  width: 200px;
  height: 100%;
  background-color: ${({ isClicked, theme }) =>
    isClicked ? theme.colors.blue : theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  text-transform: uppercase;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 700;
  transition: 0.3s;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    color: white;
  }

  &.clicked-button {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

export default StyledHeroImageButton;
