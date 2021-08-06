import React from 'react';
import { StyledContact, Wrapper } from './Contact.styles';
import Title from '../../Title/Title';
import ContentDivider from '../../ContentDivider/ContentDivider';
import { elSystemInfo } from '../../../data/appTextData';
import ContactInfoOffice from '../../ContactInfoOffice/ContactInfoOffice';

const Contact = () => {
  const {
    contact: {
      headline,
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
  const contentTitle = headline.toUpperCase();

  return (
    <StyledContact>
      <Wrapper>
        <Title title={contentTitle} />
        <ContentDivider />
        <ContactInfoOffice
          title={officeHeadline}
          street={street}
          postalCode={postalCode}
          city={city}
          phoneNrs={phoneNrs}
          email={email}
          headlineCompany={headlineCompany}
          companySuffix={companySuffix}
          companyMainName={companyMainName}
          address={address}
          nip={nip}
          regon={regon}
          bankAccountHeadline={bankAccountHeadline}
          bankName={bankName}
          accountHeadline={accountHeadline}
          accountNumber={accountNumber}
        />
      </Wrapper>
    </StyledContact>
  );
};

export default Contact;

// contact: {
//   companiesData: {
//     headline: 'Dane Firmy',
//       name: {
//       suffix: 'Przedsiębiorstwo Techniczno-Usługowe',
//         mainName: 'Elsystem Tomasz Pietras',
//     },
//     address: 'ul. Guliwera 11, 20-714 Lublin',
//     nip: '712-286-95-53',
//     regon: '060674447',
//     bankAccount: {
//       headline: 'konto bankowe:',
//       name: 'ING Bank Śląski S.A.',
//       account: {
//       headline: 'nr konta:',
//       number: '67 1050 1461 1000 0090 7599 2967',
//     },
//     },
//   },
// },
