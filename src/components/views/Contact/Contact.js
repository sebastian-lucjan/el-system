import React from 'react';
import * as PropTypes from 'prop-types';
import { StyledContact, Wrapper } from './Contact.styles';
import Title from '../../Title/Title';
import ContentDivider from '../../ContentDivider/ContentDivider';
import { elSystemInfo, websiteData } from '../../../data/appTextData';
import ContactInfoOffice from '../../ContactInfoOffice/ContactInfoOffice';

const Contact = ({ name }) => {
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

  // const { name: nameToScroller } = websiteData;

  const contentTitle = headline.toUpperCase();

  return (
    <StyledContact name={name}>
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

Contact.propTypes = { name: PropTypes.string.isRequired };

export default Contact;
