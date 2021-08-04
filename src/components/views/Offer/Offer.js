import React from 'react';
import { Icon } from '@iconify/react';
import { StyledOffer, Wrapper } from './Offer.styles';
import Title from '../../Title/Title';
import ContentDivider from '../../ContentDivider/ContentDivider';
import { elSystemInfo } from '../../../data/appTextData';

const OfferPage = () => {
  const { offer } = elSystemInfo;
  const contentTitle = offer.headline.toUpperCase();
  // const paragraphs = textParagraphs.map((paragraph, index) => {
  //   const key = `paragraph-${index + 1}`;
  //
  //   return (
  //     <div className="paragraph" key={key}>
  //       {paragraph}
  //     </div>
  //   );
  // });

  return (
    <StyledOffer>
      <Wrapper>
        <Title title={contentTitle} />
        <ContentDivider />
        {/* {offers} */}
        <Icon icon="clarity:design-line" />

        <Icon icon="si-glyph:magnifier" />

        <Icon icon="fluent:device-meeting-room-remote-32-regular" />

        <Icon icon="mdi-light:factory" />

        <Icon icon="mdi:help-network-outline" />

        <Icon icon="mdi:select-search" />

        <Icon icon="mdi:robot-industrial" />

        <Icon icon="mdi:solar-power" />

        <Icon icon="fluent:document-bullet-list-20-regular" />
      </Wrapper>
    </StyledOffer>
  );
};

export default OfferPage;

/*
//TODO: icons to add
import { Icon } from '@iconify/react';
ekierka
<Icon icon="clarity:design-line" />

lupa
<Icon icon="si-glyph:magnifier" />

atomatyka
fluent:device-meeting-room-remote-32-regular

fabryka
<Icon icon="mdi-light:factory" />

doradztwo
<Icon icon="mdi:help-network-outline" />

analizy
<Icon icon="mdi:select-search" />

automatyka
<Icon icon="mdi:robot-industrial" />

instalacje foto
<Icon icon="mdi:solar-power" />

inne
<Icon icon="fluent:document-bullet-list-20-regular" />

*/

/*
 offer: {
    headline: 'Oferta',
     offers: [
     {
       headline:
         'Projektowanie i wykonawstwo sieci, instalacji i urządzeń elektroenergetycznych oraz  Instalacji teletechnicznych',
       description:
         'Zajmujemy się projektowaniem i wykonawstwem sieci elektroenergetycznych SN i nn, stacji transformatorowych, rozdzielnic SN i nn oraz instalacji elektroenergetycznych i teletechnicznych – SSP, KD, CCTV, DSO . Świadczymy usługi dla sektora energetyki zawodowej, przemysłu i budownictwa ogólnego (budynki handlowe, użyteczności publicznej, budynki mieszkalne).',
     },
     {
       headline:
         'Kontrola stanu technicznego instalacji i urządzeń elektroenergetycznych',
       description:
         'Wykonujemy badania odbiorcze i okresowe instalacji i urządzeń elektroenergetycznych oraz instalacji odgromowych.',
     },
     {
       headline: 'Automatyka budynkowa.',
       description:
         // eslint-disable-next-line max-len
         'Projektujemy i wdrażamy rozwiązania z zakresu automatyki budynkowej dopasowane do potrzeb i oczekiwań klienta.',
     },
     {
       headline: 'Rozwiązania dla przemysłu',
       description:
         'Projektujemy i wdrażamy rozwiązania z zakresu automatyki przemysłowej dopasowane do potrzeb i oczekiwań klienta.',
     },
     {
       headline: 'Dworactwo techniczne, nadzory inwestorskie',
       description:
         'Oferujemy kompleksowy i fachowy nadzór nad wszelkiego rodzaju pracami elektroinstalacyjnymi. Świadczymy usługi w zakresie pełnienia nadzoru inwestorskiego i kierowania robotami budowlanymi.',
     },
     {
       headline: 'Analizy techniczne',
       description:
         'Wykonujemy analizy techniczne obejmujące m.in. możliwości przyłączania odnawialnych źródeł energii (OZE) oraz analizy współpracy źródeł z siecią (analizy napięciowe, koordynacja zabezpieczeń).',
     },
     {
       headline: 'Automatyka elektroenergetyczna',
       description:
         'Zajmujemy się projektowaniem układów automatyki elektroenergetycznej i układów telemechaniki dla potrzeb OZE i innych obiektów elektroenergetycznych.',
     },
     {
       headline: 'Instalacje fotowoltaiczne',
       description:
         'Projektujemy i wdrażamy rozwiązania z zakresu instalacji fotowoltaicznych – od mikroinstalacji do farm fotowoltaicznych.',
     },
     {
       headline: 'Inne usługi:',
       description: '',
       others: [
         'Analiza jakości energii,',
         'Analiza możliwości optymalizacji kosztów energii,',
         'Projektowanie układów kompensacji mocy biernej,',
         'Adaptacja i optymalizacja projektów typowych.',
       ],
     },
   ],
 },
*/
