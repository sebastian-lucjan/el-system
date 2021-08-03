import React from 'react';
import { StyledContact, Wrapper } from './Contact.styles';
import Title from '../../Title/Title';
import ContentDivider from '../../ContentDivider/ContentDivider';
import { elSystemInfo } from '../../../data/appTextData';

const Contact = () => {
  const { contact } = elSystemInfo;
  const contentTitle = contact.headline.toUpperCase();
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
    <StyledContact>
      <Wrapper>
        <Title title={contentTitle} />
        <ContentDivider />
        {/* {offers} */}
      </Wrapper>
    </StyledContact>
  );
};

export default Contact;

//
//
//
// cooperation: {
//   headline: 'Oferta',
//     companies: [
//     'PGE Dystrybucja S.A',
//     'MPWiK Sp. z o.o. Lublin',
//     '081 Architekci',
//     'Biuro Architektoniczne Marcin Tatar',
//     'In Loft Deweloper',
//     'Kwadrat Deweloper',
//     'Elekromontaż S.A',
//     'Trakcja PRKII',
//     'Elektroinstal Chełm ',
//   ],
// },
// contact: {
//   headline: 'Kontakt',
//     office: {
//     headline: 'Biuro',
//       address: {
//       street: 'ul. Tadeusza Jacyny-Onyszkiewicza 60',
//         postalCode: '20-781',
//         city: 'Lublin',
//     },
//   },
//   companiesData: {
//     headline: 'Dane Firmy',
//       name: {
//       suffix: 'Przedsiębiorstwo Techniczno-Usługowe',
//         mainName: 'Elsystem Tomasz Pietras',
//     },
//     address: 'ul. Guliwera 11, 20-714 Lublin',
//       nip: '712-286-95-53',
//       regon: '060674447',
//       bankAccount: {
//       headline: 'konto bankowe:',
//         name: 'ING Bank Śląski S.A.',
//         account: {
//         headline: 'nr konta:',
//           number: '67 1050 1461 1000 0090 7599 2967',
//       },
//     },
//   },
// },

//
//
//
// cooperation: {
//   headline: 'Oferta',
//     companies: [
//     'PGE Dystrybucja S.A',
//     'MPWiK Sp. z o.o. Lublin',
//     '081 Architekci',
//     'Biuro Architektoniczne Marcin Tatar',
//     'In Loft Deweloper',
//     'Kwadrat Deweloper',
//     'Elekromontaż S.A',
//     'Trakcja PRKII',
//     'Elektroinstal Chełm ',
//   ],
// },
// contact: {
//   headline: 'Kontakt',
//     office: {
//     headline: 'Biuro',
//       address: {
//       street: 'ul. Tadeusza Jacyny-Onyszkiewicza 60',
//         postalCode: '20-781',
//         city: 'Lublin',
//     },
//   },
//   companiesData: {
//     headline: 'Dane Firmy',
//       name: {
//       suffix: 'Przedsiębiorstwo Techniczno-Usługowe',
//         mainName: 'Elsystem Tomasz Pietras',
//     },
//     address: 'ul. Guliwera 11, 20-714 Lublin',
//       nip: '712-286-95-53',
//       regon: '060674447',
//       bankAccount: {
//       headline: 'konto bankowe:',
//         name: 'ING Bank Śląski S.A.',
//         account: {
//         headline: 'nr konta:',
//           number: '67 1050 1461 1000 0090 7599 2967',
//       },
//     },
//   },
// },
