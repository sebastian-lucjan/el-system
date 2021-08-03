import React from 'react';
import { elSystemInfo } from '../../data/appTextData';
import { StyledTitle } from './Title.styles';

const Title = ({ title }) => <StyledTitle>{title}</StyledTitle>;

export default Title;

// companyInfo: {
//   headline: 'O firmie',
//     textParagraphs: [
//     'Przedsiębiorstwo Techniczno–Usługowe Elsystem jest firmą istniejącą w branży elektroenergetycznej od ponad 10 lat. Jako wykwalifikowany i doświadczony zespół inżynierów świadczymy szeroki zakres usług projektowych i wdrożeniowych w zakresie sieci, urządzeń i instalacji elektroenergetycznych oraz instalacji teletechnicznych dla energetyki zawodowej, przemysłu i budownictwa. Świadczymy również usługi w zakresie badań i kontroli instalacji i urządzeń elektroenergetycznych.',
//     'Oferujemy usługi w zakresie nadzoru inwestorskiego, prowadzenia inwestycji, doradztwa i kierowania robotami budowlanymi w branży elektroenergetycznej.',
//     'Serdecznie zachęcamy Państwa do zapoznania się z informacjami o naszej działalności lub złożenia konkretnego zapytania dotyczącego oferty. Skontaktujemy się z Państwem tak szybko jak to będzie możliwe.',
//   ],
// },
