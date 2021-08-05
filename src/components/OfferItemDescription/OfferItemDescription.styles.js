import styled from 'styled-components';

const StyledOfferItemDescription = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 300;
  padding-bottom: 10px;

  .offerItem__othersList {
    transform: translateX(20px);
  }
`;

export default StyledOfferItemDescription;
