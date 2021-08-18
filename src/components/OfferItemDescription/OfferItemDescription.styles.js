import styled from 'styled-components';

const StyledOfferItemDescription = styled.div`
  font-weight: 300;
  padding: 10px 0 10px 25px;

  .offerItem__othersList {
    list-style: disc;
  }

  @media (${({ theme }) => theme.breakpoints.xxl}) {
    .offerItem__othersList {
      transform: translateX(20px);
    }
  }
`;

export default StyledOfferItemDescription;
