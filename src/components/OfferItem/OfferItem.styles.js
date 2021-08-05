import styled from 'styled-components';

export const StyledOfferItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  text-align: justify;
  margin-bottom: 50px;

  .offerItem__icon {
    height: 70px;
    width: 70px;
    padding-right: 20px;
  }

  .offerItem__headline {
    display: flex;
    align-items: flex-end;
  }
`;
