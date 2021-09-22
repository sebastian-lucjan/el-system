import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: ${({ theme }) => theme.headerHeight};
  background-color: ${({ theme }) => theme.colors.black};
  z-index: ${({ theme }) => theme.zIndex.superiorPriority};
`;
