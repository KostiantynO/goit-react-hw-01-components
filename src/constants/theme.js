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
    grey: '#f3f6f9',
    lightGrey: '#768696',
    lightLightGrey: '#e4e9f0',
    boxShadow: '#7e899e',
    lightSeaGreen: '#20b2aa',
  },
  spacing: (...args) =>
    !args
      ? '0'
      : args
          .reduce(
            (acc, arg) => [
              ...acc,
              [0, 'auto'].some(val => val === arg) || `${arg}`.includes('%')
                ? arg
                : `${arg * SPACING}px`,
            ],
            '',
          )
          .join(' '),
});
