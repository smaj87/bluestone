import { isFunction } from 'commons/utils/tinyLodash';

let currentCount = 0;

const isWindowActive = () => {
  let isActive;

  if (isFunction(document.hasFocus)) {
    isActive = document.hasFocus();
  } else {
    isActive =
      document.visibilityState === 'visible' || document.hidden === false;
  }

  return isActive;
};

export const updateFavicon = (count = 0) => {
  const link = document.getElementById('WebmailFaviconLink');

  if (link && (!isWindowActive() || count === 0)) {
    let favicon = 'favico_default.png';

    currentCount = count && count > 0 ? currentCount + count : 0;

    if (currentCount > 0 && currentCount < 10) {
      favicon = `favico_${currentCount}.png`;
    } else if (currentCount >= 10) {
      favicon = 'favico_plus.png';
    }

    link.href = (link.href || '').replace(/favico_[a-z0-9]+\.png$/gi, favicon);
  }
};
