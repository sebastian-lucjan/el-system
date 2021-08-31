import React from 'react';
import * as PropTypes from 'prop-types';
import Title from '../../Title/Title';
import ContentDivider from '../../ContentDivider/ContentDivider';
import { elSystemInfo } from '../../../data/appTextData';
import ContactInfoOffice from '../../ContactInfoOffice/ContactInfoOffice';
import { ContentWrapper } from '../../ContentWrapper/ContentWrapper.styles';
import { ViewWrapper } from '../../ViewWrapper/ViewWrapper.styles';
import photoMotorwayLightsM from '../../../../public/images/motorway-lights-1200.jpeg';
import photoMotorwayLightsL from '../../../../public/images/motorway-lights-1920.jpeg';

const ContactBackground = ({ mobile }) => (
  <>
    {!mobile && (
      <img
        className="image contact__image"
        srcSet={`
          ${photoMotorwayLightsM} 960w,
          ${photoMotorwayLightsL} 1200w,
          `}
        sizes="
          (max-width: 1920px) 960px,
          1920px,
          "
        src={photoMotorwayLightsL}
        alt="droga nocą rozmazane światła"
      />
    )}
  </>
);

ContactBackground.defaultProps = { mobile: false };

ContactBackground.propTypes = {
  mobile: PropTypes.bool,
};

const Contact = ({ name, mobile }) => {
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
    <ViewWrapper contact name={name}>
      <ContactBackground mobile={mobile} />
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

Contact.defaultProps = { mobile: false };

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  mobile: PropTypes.bool,
};

export default Contact;
