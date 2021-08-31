export const size = {
  width: {
    xxs: 360,
    xs: 420,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
    xxxl: 1900,
  },
  arrowSlider: {
    sm: '30px',
    lg: '50px',
  },
};

export const maxResolutionFullSlider = `max-width: ${size.width.xl}px`;

export const maxResolutionLargeArrows = `max-width: ${size.width.xxl}px`;

export const theme = {
  colors: {
    white: '#FFFFFF',
    blue: '#47A6ff',
    black: '#121212',
  },
  fontSize: {
    xxs: '12px',
    xs: '14px',
    s: '16px',
    m: '18px',
    l: '24px',
    xl: '28px',
    xxl: '36px',
    xxxl: '48px',
  },
  fontWeight: {
    extraLight: 300,
    light: 400,
    semiBold: 600,
    bold: 700,
  },
  headerHeight: '64px',
  margin: '20px',
  devices: {
    xxs: `min-width: ${size.width.xxs}px`,
    xs: `min-width: ${size.width.xs}px`,
    sm: `min-width: ${size.width.sm}px`,
    md: `min-width: ${size.width.md}px`,
    lg: `min-width: ${size.width.lg}px`,
    xl: `min-width: ${size.width.xl}px`,
    xxl: `min-width: ${size.width.xxl}px`,
    xxxl: `min-width: ${size.width.xxxl}px`,
  },
  zIndex: {
    base: '0',
    priority: '1',
    highPriority: '2',
    superiorPriority: '3',
  },
};
// todo: usunac zbedne kolory i wielkosci czcionek
