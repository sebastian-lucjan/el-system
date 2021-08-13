import styled from 'styled-components';

export const ViewWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: ${({ centered }) => (centered ? 'centered' : 'flex-start')};
  padding: 100px;
`;
