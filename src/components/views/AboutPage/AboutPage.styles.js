import styled from 'styled-components';

export const StyledParagraph = styled.div`
  font-weight: 300;
  text-align: justify;
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSize.xxs};

  @media (${({ theme }) => theme.devices.xs}) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    line-height: 24px;
  }

  @media (${({ theme }) => theme.devices.xxl}) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media (orientation: landscape) and (${({ theme }) => theme.devices.xl}) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (orientation: portrait) and (${({ theme }) => theme.devices.lg}) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
