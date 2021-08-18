import styled from 'styled-components';

const StyledOfferItemTitle = styled.div`
  //flex-grow: 1;
  font-weight: ${({ activeOfferDescription }) =>
    activeOfferDescription ? 400 : 300};
  width: 100%;
  cursor: pointer;
  //media()
`;

export default StyledOfferItemTitle;
