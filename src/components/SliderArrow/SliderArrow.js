import { Icon } from '@iconify/react';
import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { size } from '../../assets/styles/theme';

const maxResolutionFullSlider = `max-width: ${size.xxl}px`;

const StyledArrow = styled(Icon)`
  position: absolute;
  top: 50%;
  left: ${({ direction }) => (direction === 'right' ? 'calc(50vw - 50px)' : 0)};
  transform: translateY(50%);
  z-index: 2;
  height: 30px;
  width: 30px;
  opacity: 0.33;
  cursor: pointer;

  @media (orientation: landscape) and (${({ theme }) =>
      theme.devices.md}) and (${maxResolutionFullSlider}) {
    left: ${({ direction }) =>
      direction === 'right' ? 'calc(100vw - 70px)' : '20px'};
    height: 50px;
    width: 50px;
    transform: translateY(-15px);
  }

  @media (orientation: portrait) and (${({ theme }) => theme.devices.md}) {
    left: ${({ direction }) =>
      direction === 'right' ? 'calc(100vw - 70px)' : '20px'};
    transform: translateY(-50%);
    height: 50px;
    width: 50px;
  }

  @media (orientation: landscape) and (${({ theme }) => theme.devices.xl}) {
    left: ${({ direction }) =>
      direction === 'right' ? 'calc(50vw - 70px)' : 0};
  }

  @media (orientation: landscape) and (${({ theme }) => theme.devices.xxl}) {
    left: ${({ direction }) =>
      direction === 'right' ? 'calc(50vw - 50px)' : 0};
    transform: translateY(-50%);
  }
`;

const SliderArrow = ({ style, direction, onClick }) => (
  <StyledArrow
    style={{
      ...style,
    }}
    onClick={onClick}
    direction={direction}
    icon={`ph:caret-${direction}-bold`}
  />
);

SliderArrow.defaultProps = {
  onClick: () => {},
};

SliderArrow.propTypes = {
  direction: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default SliderArrow;
