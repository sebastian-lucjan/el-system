import PropTypes from 'prop-types';
import StyledTitle from './Title.styles';

const Title = ({ title }) => <StyledTitle>{title}</StyledTitle>;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
