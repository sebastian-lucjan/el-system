import styled from 'styled-components';

export const StyledShortContact = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: ${({ isClicked }) => (isClicked ? 'translateX(200px)' : 'translateX(-140px)')};
  display: flex;
  align-items: center;
  width: 340px;
  height: 60px;
  padding: 10px ${({ theme }) => theme.baseSpacing};
  z-index: ${({ theme }) => theme.zIndex.hidden};
  transition: 0.5s ease-out;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  text-transform: none;
  font-weight: ${({ theme }) => theme.fontWeight.extraLight};

  .short-contact-column {
    margin-right: ${({ theme }) => theme.baseSpacing};
    cursor: text;
    text-align: left;
  }
  .short-contact-exit {
    position: absolute;
    top: 0;
    right: 0;
    margin: 5px;
    color: ${({ theme }) => theme.colors.white};
    height: ${({ theme }) => theme.baseSpacing};
    cursor: pointer;
  }
`;
