import styled from 'styled-components';

export const StyledShortContact = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: ${({ isClicked }) =>
    isClicked ? 'translateX(200px)' : 'translateX(-140px)'};
  display: flex;
  align-items: center;
  width: 340px;
  height: 60px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  font-weight: 300;
  text-transform: none;
  padding: 10px 20px;
  z-index: -1;
  transition: 0.5s ease-in-out;

  .short-contact-column {
    margin-right: 20px;
    cursor: text;
    text-align: left;
  }
  .short-contact-exit {
    position: absolute;
    top: 0;
    right: 0;
    margin: 5px;
    color: white;
    height: 16px;
    cursor: pointer;
  }
`;
