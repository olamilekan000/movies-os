const crypto = require('crypto');

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const generateCryptoToken = () =>
  new Promise((resolve, reject) => {
    crypto.randomBytes(20, (err, buf) => {
      const token = buf.toString('hex');
      resolve(token);
      if (err) reject(err);
    });
  });

const containerNameFormatter =
  (group, capitalizeName = true) =>
  (contName) => {
    const sanitizedString = contName.replace(
      new RegExp('(?:\\b|_)([a-z])', 'g'),
      ($1) => (capitalizeName ? $1.toUpperCase() : $1)
    );

    const cleanContName = sanitizedString.replace(new RegExp('[-]', 'g'), '');

    const name = `${cleanContName.split('.')[0]}${capitalize(group)}`;

    return name;
  };

const filterEmptyObjects = (obj) => {
  const allObjectValues = Object.keys(obj);

  const newObject = allObjectValues.reduce((acc, currObjKey) => {
    if (obj[currObjKey]) {
      return {
        ...acc,
        [currObjKey]: obj[currObjKey]
      };
    }
    return acc;
  }, {});

  return newObject;
};

module.exports = {
  capitalize,
  generateCryptoToken,
  containerNameFormatter,
  filterEmptyObjects
};
