import styled from 'styled-components';

export const StyledOfferItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: 16px;
  width: 100%;

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

  @media (${({ theme }) => theme.breakpoints.xxl}) {
    width: 900px;
    margin-bottom: 50px;
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 24px;
  }
`;
