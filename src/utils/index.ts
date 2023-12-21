export const convertRelativeAbundance = (value: number): string => {
  if (value * 100 < 0.01) {
    return `< 0.01%`;
  } else {
    return (value * 100).toFixed(2) + '%';
  }
};
