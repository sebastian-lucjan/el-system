import * as PropTypes from 'prop-types';
import { elSystemInfo } from 'data/appTextData';
import StyledContactOffice from './ContactInfoOffice.styles';

const ContactInfoOffice = () => {
  const {
    contact: {
      headline: title,
      office: {
        headline: officeHeadline,
        address: { street, postalCode, city },
        phoneNrs,
        email,
      },
      companiesData: {
        headline: headlineCompany,
        name: { suffix: companySuffix, mainName: companyMainName },
        address,
        nip,
        regon,
        bankAccount: {
          headline: bankAccountHeadline,
          name: bankName,
          account: { headline: accountHeadline, number: accountNumber },
        },
      },
    },
  } = elSystemInfo;

  return (
    <StyledContactOffice>
      <article className="contact-info__office">
        <h3 className="contact-info__title">{title}</h3>
        <address className="contact-info__details">
          <p>{`${street},`}</p>
          <p>{`${postalCode} ${city},`}</p>
          <p>{`tel.: ${phoneNrs[0]}, ${phoneNrs[1]}`}</p>
          <p>
            email:{' '}
            <a className="contact-info__email-link email-link" href={`mailto:${email}`}>
              {email}
            </a>
          </p>
        </address>
      </article>

      <article className="contact-info__office">
        <h3 className="contact-info__title">{headlineCompany}</h3>
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
};

export default ContactInfoOffice;
