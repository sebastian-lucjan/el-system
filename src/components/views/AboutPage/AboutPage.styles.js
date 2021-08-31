import styled from 'styled-components';

export const StyledParagraph = styled.div`
  //mobile small
  font-weight: ${({ theme }) => theme.fontWeight.extraLight};
  text-align: justify;
  margin-bottom: ${({ theme }) => theme.baseSpacing};
  font-size: ${({ theme }) => theme.fontSize.xxs};

  //mobile medium
  @media (${({ theme }) => theme.devices.xs}) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    line-height: 24px;
  }

  //Desktop landscape for small resolution like laptop
  @media (orientation: landscape) and (${({ theme }) => theme.devices.xl}) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  //Desktop landscape for medium resolution
  @media (${({ theme }) => theme.devices.xxl}) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  //iPad portrait
  @media (orientation: portrait) and (${({ theme }) => theme.devices.lg}) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
