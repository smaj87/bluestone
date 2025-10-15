const uniqueId = () => {
  const uniques: { [key: string]: boolean } = {};

  return (prefix = '', postfix = '') => {
    let newUnique;

    do {
      newUnique = `${prefix}_${new Date().valueOf()}_${Math.random()}_${Math.random()}_${postfix}`;
    } while (uniques[newUnique]);

    uniques[newUnique] = true;

    return newUnique;
  };
};

const getUniqueId = uniqueId();

export default getUniqueId;
