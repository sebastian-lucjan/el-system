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
        <p>{`${accountHeadline}: ${accountNumber}`}</p>
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
};

// companiesData: {
//   headline: 'Dane Firmy',
//     name: {
//     suffix: 'Przedsiębiorstwo Techniczno-Usługowe',
//       mainName: 'Elsystem Tomasz Pietras',
//   },
//   address: 'ul. Guliwera 11, 20-714 Lublin',
//     nip: '712-286-95-53',
//     regon: '060674447',
//     bankAccount: {
//     headline: 'konto bankowe:',
//       name: 'ING Bank Śląski S.A.',
//       account: {
//       headline: 'nr konta:',
//         number: '67 1050 1461 1000 0090 7599 2967',
//     },
//   },
