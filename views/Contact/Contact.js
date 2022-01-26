import { useContext } from 'react';
import { PageContext } from 'data/pageContextData';
import Title from '../../components/Title/Title';
import ContentDivider from '../../components/ContentDivider/ContentDivider';
import ContactInfoOffice from '../../components/ContactInfoOffice/ContactInfoOffice';
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper.styles';
import { ViewWrapper } from '../../components/ViewWrapper/ViewWrapper.styles';
import photoMotorwayLightsM from '../../public/images/motorway-lights-800.jpeg';
import photoMotorwayLightsL from '../../public/images/motorway-lights-1200.jpeg';
import { elSystemInfo } from '../../data/appTextData';

const ContactBackground = () => {
  const { mobile } = useContext(PageContext);

  return (
    <>
      {!mobile && (
        <img
          className="image contact__image"
          srcSet={`
          ${photoMotorwayLightsM} 800w,
          ${photoMotorwayLightsL} 1200w,
          `}
          sizes="
          (max-width: 1500px) 800px,
          1500px,
          "
          src={photoMotorwayLightsL}
          alt="droga nocą rozmazane światła, tło dla działu kontakt"
        />
      )}
    </>
  );
};

const contentTitle = elSystemInfo.contact.headline.toUpperCase();

const Contact = () => (
  <ViewWrapper contact name="contact">
    <ContactBackground />
    <ContentWrapper>
      <Title title={contentTitle} />
      <ContentDivider />
      <ContactInfoOffice />
    </ContentWrapper>
  </ViewWrapper>
);

export default Contact;
