import styled from 'styled-components';

const StyledOfferItemDescription = styled.div`
  //mobile
  font-weight: ${({ theme }) => theme.fontWeight.extraLight};
  padding: 10px 0 0 30px;
  text-align: left;
  line-height: 18px;

  .offerItem__othersList {
    list-style: disc;
    width: calc(100% - 20px);
    transform: translateX(${({ theme }) => theme.baseSpacing});
  }

  //iPad and large mobile landscape
  @media (${({ theme }) => theme.devices.md}) {
    padding: 10px 0;
    line-height: 24px;
  }

  //Desktop landscape for medium resolution
  @media (${({ theme }) => theme.devices.xxl}) {
    line-height: 28px;
    padding: 10px 0;

    .offerItem__othersList {
      transform: translateX(${({ theme }) => theme.baseSpacing});
    }
  }
`;

export default StyledOfferItemDescription;
