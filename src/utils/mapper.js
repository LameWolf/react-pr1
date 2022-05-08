export const mapper = (array) => {
  return array.map(({ backdrop_path: img, id, title }) => ({ img, id, title }));
};
