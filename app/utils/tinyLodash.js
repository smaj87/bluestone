/* eslint-disable prefer-destructuring */
export const fromEntries = (entries) => {
  const res = {};

  for (let i = 0; i < entries.length; i += 1) {
    res[entries[i][0]] = entries[i][1];
  }

  return res;
};
