export const size = {
  xxs: 360,
  xs: 420,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export const theme = {
  colors: {
    white: '#FFFFFF',
    lightGray: '#DDDDDD',
    blue: '#47a6ff',
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
  devices: {
    xxs: `min-width: ${size.xxs}px`,
    xs: `min-width: ${size.xs}px`,
    sm: `min-width: ${size.sm}px`,
    md: `min-width: ${size.md}px`,
    lg: `min-width: ${size.lg}px`,
    xl: `min-width: ${size.xl}px`,
    xxl: `min-width: ${size.xxl}px`,
  },
  zIndex: {
    base: '0',
    priority: '1',
    highPriority: '2',
    superiorPriority: '3',
  },
};

// todo: usunac zbedne kolory i wielkosci czcionek
