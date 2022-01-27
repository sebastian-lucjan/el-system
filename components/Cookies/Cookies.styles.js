import styled from 'styled-components';

const StyledCookies = styled.aside`
  //mobile small
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.8;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.highPriority};

  text-align: justify;
  font-size: ${({ theme }) => theme.fontSize.xxxs};

  .cookies__content-container {
    max-width: 320px;
    padding: 20px 10px 20px 20px;
  }
  .cookies__link,
  .cookies__accept {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .cookies__accept {
    border: none;
    font-size: inherit;
  }
  .cookies__dismissIcon {
    display: flex;
    align-items: center;
    height: inherit;
    width: 20px;
    margin-right: 10px;
  }

  //mobile medium
  @media (${({ theme }) => theme.devices.xxs}) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }

  //mobile large
  @media (${({ theme }) => theme.devices.sm}) {
    background-color: #121212cc; //bgc "121212" with opacity "cc"
    color: ${({ theme }) => theme.colors.white};
    padding: 10px;
    justify-content: center;
    text-align: center;

    .cookies__content-container {
      max-width: 100%;
      padding: 0 5px 0 20px;
    }

    .cookies__link,
    .cookies__accept {
      background-color: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }

    .cookies__dismissIcon {
      transform: translateX(0px);
    }
  } ;
`;

export default StyledCookies;
