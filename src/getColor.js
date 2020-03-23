export const getColor = () => {
  const allColors = [
    '#af201b',
    '#5c677b',
    '#6087a4',
    '#4d8fc2',
    '#5b9ea6',
    '#929b7c',
    '#606046',
    '#6d4a46',
    '#bc7062',
    '#cd825a',
    '#ecc0a5',
    '#202221',
    '#303730',
  ];

  const randomColorIndex = Math.floor(Math.random() * allColors.length);

  return allColors[randomColorIndex];
};
