import React from 'react';
import * as PropTypes from 'prop-types';
import Title from '../../Title/Title';
import ContentDivider from '../../ContentDivider/ContentDivider';
import { elSystemInfo, websiteData } from '../../../data/appTextData';
import ContactInfoOffice from '../../ContactInfoOffice/ContactInfoOffice';
import { ContentWrapper } from '../../ContentWrapper/ContentWrapper.styles';
import { ViewWrapper } from '../../ViewWrapper/ViewWrapper.styles';

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

  const contentTitle = headline.toUpperCase();

  return (
    <ViewWrapper name={name}>
      <ContentWrapper>
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
      </ContentWrapper>
    </ViewWrapper>
  );
};

Contact.propTypes = { name: PropTypes.string.isRequired };

export default Contact;
