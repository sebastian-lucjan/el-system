import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  height: 64px;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 1;
`;
