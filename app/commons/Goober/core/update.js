/**
 * Updates the target and keeps a local cache
 * @param {String} css
 * @param {Object} sheet
 * @param {Boolean} prepend
 * @param {string} prevGClassName
 */
export const update = (css, sheet, prepend, prevGClassName = '') => {
  if (sheet.data.indexOf(css) < 0) {
    if (prepend) {
      if (prevGClassName) {
        const media = '\\s*(@media[^{]*{)?';
        const className = `\\s*\\.${prevGClassName}\\s*{`;
        const regex = new RegExp(
          `^${media}${className}|}${media}${className}`,
          'gi',
        );
        const indexOf = sheet.data.search(regex);

        if (indexOf >= 0) {
          const shift = sheet.data.charAt(indexOf) === '}' ? 1 : 0;
          // eslint-disable-next-line no-param-reassign
          sheet.data = `${sheet.data.slice(
            0,
            indexOf + shift,
          )}${css}${sheet.data.slice(indexOf + shift)}`;
        } else {
          // eslint-disable-next-line no-param-reassign
          sheet.data = `${css}${sheet.data}`;
        }
      } else {
        // eslint-disable-next-line no-param-reassign
        sheet.data = `${css}${sheet.data}`;
      }
    } else {
      // eslint-disable-next-line no-param-reassign
      sheet.data = `${sheet.data}${css}`;
    }
  }
};

export const remove = (css, sheet) => {
  if (sheet.data.indexOf(css) >= 0) {
    // eslint-disable-next-line no-param-reassign
    sheet.data = sheet.data.replace(css, '');
  }
};
