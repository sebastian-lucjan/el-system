import { Icon } from '@iconify/react';
import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { size } from '../../assets/styles/theme';

const maxResolutionFullSlider = `max-width: ${size.xxl}px`;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  left: ${({ direction }) => (direction === 'right' ? 'calc(50vw - 50px)' : 0)};
  transform: translateY(-50%);
  z-index: 2;
  height: 30px;
  width: 30px;
  opacity: 0.33;
  cursor: pointer;

  @media (orientation: landscape) and (${({ theme }) =>
      theme.devices.md}) and (${maxResolutionFullSlider}) {
    left: ${({ direction }) =>
      direction === 'right' ? 'calc(100vw - 50px)' : '20px'};
  }
`;

const SliderArrow = ({ style, direction }) => (
  <StyledIcon
    style={{
      ...style,
    }}
    direction={direction}
    icon={`ph:caret-${direction}-bold`}
  />
);

SliderArrow.propTypes = {
  direction: PropTypes.string.isRequired,
};

export default SliderArrow;
