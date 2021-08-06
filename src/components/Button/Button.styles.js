import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'active-link';

export const StyledButton = styled.div.attrs({ activeClassName })`
  //.navigation__button {
  font-size: 16px;
  font-weight: 300;
  margin: 20px;
  //text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;

  &::after {
    display: block;
    content: '';
    height: 2px;
    width: 100%;
    background-color: white;
    transform: translateX(-110%);
    transition: 0.3s;
  }
  &:hover {
    &::after {
      transform: translateX(0%);
    }
  }
  //}
`;

//   &.active-link {
//     position: relative;
//   }
//   &.active-link::before {
//     display: block;
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     content: '';
//     transform: translateX(0%);
//     height: 2px;
//     width: 100%;
//     background-color: ${({ theme }) => theme.colors.lightGray};
//     transition: 0.2s;
//   }
// `;
