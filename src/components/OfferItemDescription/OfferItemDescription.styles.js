import styled from 'styled-components';

const StyledOfferItemDescription = styled.div`
  font-weight: 300;
  padding: 10px 0 0 30px;

  .offerItem__othersList {
    list-style: disc;
    transform: translateX(20px);
  }

  @media (${({ theme }) => theme.devices.xxl}) {
    padding: 0;

    .offerItem__othersList {
      transform: translateX(20px);
    }
  }
`;

export default StyledOfferItemDescription;
