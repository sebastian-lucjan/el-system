import styled from 'styled-components';

const StyledOfferItemTitle = styled.div`
  //flex-grow: 1;
  font-weight: 400;
  width: 100%;
  cursor: pointer;
  //media()
  &:after {
    display: block;
    content: '';
    position: absolute;
    bottom: -10px;
    left: 30px;
    margin-top: 10px;
    height: 1px;
    width: calc(100% - 30px);
    background-color: #777;
  }
`;

export default StyledOfferItemTitle;
