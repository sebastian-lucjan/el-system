import React from 'react';
import * as PropTypes from 'prop-types';
import StyledContactOffice from './ContactInfoOffice.styles';

const ContactInfoOffice = ({
  title,
  street,
  postalCode,
  city,
  phoneNrs,
  email,
  headlineCompany,
  companySuffix,
  companyMainName,
  address,
  nip,
  regon,
  bankAccountHeadline,
  bankName,
  accountHeadline,
  accountNumber,
}) => (
  <StyledContactOffice>
    <article className="contact-info__office">
      <h2 className="contact-info__title">{title}</h2>
      <address className="contact-info__details">
        <p>{`${street},`}</p>
        <p>{`${postalCode} ${city},`}</p>
        <p>{`tel.: ${phoneNrs[0]}, ${phoneNrs[1]}`}</p>
        <p>{`email: ${email}`}</p>
      </address>
    </article>

    <article className="contact-info__office">
      <h2 className="contact-info__title">{headlineCompany}</h2>
      <address className="contact-info__details">
        <p>{`${companySuffix}`}</p>
        <p>{`${companyMainName}`}</p>
        <p>{`${address}`}</p>
        <p>{`NIP: ${nip}; REGON: ${regon}`}</p>
        <p>{`${bankAccountHeadline}`}</p>
        <p>{`${bankName}`}</p>
        <p>{`${accountHeadline} ${accountNumber}`}</p>
      </address>
    </article>
  </StyledContactOffice>
);

export default ContactInfoOffice;

ContactInfoOffice.defaultProps = { phoneNrs: [] };

ContactInfoOffice.propTypes = {
  street: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  phoneNrs: PropTypes.arrayOf(PropTypes.string),
  email: PropTypes.string.isRequired,
  headlineCompany: PropTypes.string.isRequired,
  companySuffix: PropTypes.string.isRequired,
  companyMainName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  nip: PropTypes.string.isRequired,
  regon: PropTypes.string.isRequired,
  bankAccountHeadline: PropTypes.string.isRequired,
  bankName: PropTypes.string.isRequired,
  accountHeadline: PropTypes.string.isRequired,
  accountNumber: PropTypes.string.isRequired,
};
