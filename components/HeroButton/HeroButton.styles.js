import styled from 'styled-components';

const StyledHeroImageButton = styled.button.attrs({ tabIndex: '-1' })`
  width: 200px;
  height: 100%;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ isClicked, theme }) => (isClicked ? theme.colors.blue : theme.colors.white)};
  color: ${({ isClicked, theme }) => (isClicked ? theme.colors.white : theme.colors.black)};
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  transition: ${({ theme }) => theme.transition};
  text-transform: uppercase;
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex.highPriority};

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
  }

  &.clicked-button {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

export default StyledHeroImageButton;
