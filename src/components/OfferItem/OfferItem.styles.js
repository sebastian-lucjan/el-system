import styled from 'styled-components';

export const StyledOfferItem = styled.article`
  
  //mobile
  display: flex;
  position: relative;
  flex-direction: column;
  text-align: justify;
  margin-bottom: ${({ theme }) => theme.baseSpacing};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  line-height: 16px;
  width: 100%;

  &:after {
    display: block;
    content: '';
    position: absolute;
    bottom: -10px;
    left: 30px;
    margin-top: 10px;
    height: 1px;
    width: calc(100% - 30px);
    background-color: ${({ theme }) => theme.colors.gray};
  }

  .offerItem__icon {
    height: 70px;
    width: 70px;
    padding-right: 20px;
  }

  .offerItem__headline {
    display: flex;
    position: relative;
    width: 100%;
    flex-direction: row;
    align-items: center;
  }

  //mobile medium
  @media (${({ theme }) => theme.devices.xs}) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  //iPad portrait / mobile large landscape
  @media (${({ theme }) => theme.devices.md}) {
    margin-bottom: 40px;

    &:after {
      display: none;
  }

  //Desktop landscape for medium resolution
  @media (${({ theme }) => theme.devices.xxl}) {
    width: 900px;
    margin-bottom: 50px;
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 24px;
  }

`;
