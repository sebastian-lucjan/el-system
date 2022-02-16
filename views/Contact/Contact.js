import { useContext } from 'react';
import PageContext from 'data/pageContextData';
import Title from 'components/Title/Title';
import ContentDivider from 'components/ContentDivider/ContentDivider';
import ContactInfoOffice from 'components/ContactInfoOffice/ContactInfoOffice';
import ContentWrapper from 'components/ContentWrapper/ContentWrapper.styles';
import ViewWrapper from 'components/ViewWrapper/ViewWrapper.styles';
import photoMotorwayLights from 'public/images/motorway-lights-1200.jpeg';
import { elSystemInfo } from 'data/appTextData';
import Image from 'next/image';

const ContactBackground = () => {
  const { mobile } = useContext(PageContext);

  return (
    <>
      {!mobile && (
        <div className="contact__image-wrapper">
          <div className="contact__image">
            <Image
              layout="fill"
              src={photoMotorwayLights}
              objectFit="scale-down"
              objectPosition="center bottom"
              // quality={75}
              alt="droga nocą rozmazane światła, tło dla działu kontakt"
              sizes="(min-width: 0px) 2x 25vw, (min-width: 0px) 1x 50vw"
              // 25vh because retina > 2.0 ratio
              priority
            />
          </div>
        </div>
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
