import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { size, maxResolutionLargeArrows } from '../../assets/styles/theme';

const StyledArrow = styled(Icon)`
  position: absolute;
  top: 50%;
  left: ${({ direction }) => (direction === 'right' ? 'calc(50vw - 60px)' : 0)};
  transform: translateY(50%);
  z-index: ${({ theme }) => theme.zIndex.highPriority};
  height: ${size.arrowSlider.sm};
  width: ${size.arrowSlider.sm};
  opacity: 0.33;
  cursor: pointer;

  @media (orientation: landscape) and (${({ theme }) => theme.devices.md}) and (${maxResolutionLargeArrows}),
    (orientation: portrait) and (${({ theme }) => theme.devices.md}) {
    left: ${({ direction }) => (direction === 'right' ? 'calc(100% - 80px)' : '30px')};
    height: ${size.arrowSlider.lg};
    width: ${size.arrowSlider.lg};
    transform: translateY(-50%);
  }

  @media (orientation: landscape) and (${({ theme }) => theme.devices.xl}) {
    left: ${({ direction }) => (direction === 'right' ? 'calc(50vw - 80px)' : 0)};
  }

  @media (orientation: landscape) and (${({ theme }) => theme.devices.xxl}) {
    left: ${({ direction }) => (direction === 'right' ? 'calc(50vw - 60px)' : 0)};
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
  style: {},
};

SliderArrow.propTypes = {
  direction: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.string),
};

export default SliderArrow;
