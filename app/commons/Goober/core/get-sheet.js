const GOOBER_ID = '_goober';

/**
 * Returns the _commit_ target
 * @param {Object} [target]
 * @returns {HTMLStyleElement|{data: ''}}
 */
export const getSheet = () =>
  // Querying the existing target for a previously defined <style> tag
  // We're doing a querySelector because the <head> element doesn't implemented the getElementById api
  (
    window[GOOBER_ID] ||
    Object.assign(document.head.appendChild(document.createElement('style')), {
      innerHTML: ' ',
      id: GOOBER_ID,
    })
  ).firstChild;
