const SPACING = 4;

export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    black: '#010101',
    green: '#4caf50',
    red: '#f44336',
    blue: '#2196f3',
    primaryText: '#212121',
    secondaryText: '#757575',
  },
  spacing: (...args) =>
    !args
      ? '0'
      : args.reduce((acc, arg) => [...acc, `${arg * SPACING}px`], '').join(' '),
});
