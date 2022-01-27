import { Icon } from '@iconify/react';
import { PropTypes } from 'prop-types';
import { elSystemInfo } from 'data/appTextData';
import StyledShortContact from './ShortContact.styles';

const ShortContact = ({ onClick, isClicked }) => {
  const {
    contact: {
      office: {
        phoneNrs: [phoneNumber],
        email,
      },
    },
  } = elSystemInfo;

  return (
    <StyledShortContact isClicked={isClicked}>
      {isClicked && (
        <>
          <div className="short-contact-column">
            <p>tel.:</p>
            <p>email:</p>
          </div>
          <div className="short-contact-column">
            <p>{`${phoneNumber}`}</p>
            <p>{`${email}`}</p>
          </div>
          <Icon onClick={onClick} className="short-contact-exit" icon="feather:x" />
        </>
      )}
    </StyledShortContact>
  );
};

ShortContact.propTypes = {
  isClicked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ShortContact;
