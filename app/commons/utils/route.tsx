import history from 'commons/utils/history';

export const historyPush = (pathname: string): string => {
  if (pathname !== window.location.pathname) {
    history.push(pathname);
  }

  return pathname;
};

export const goTo = (
  module: string,
  urlParams: Record<string, string | number>,
  defaults: Record<string, string | number>,
) => {
  const urlArr: string[] = [];

  Object.keys(urlParams).forEach((key) => {
    if (
      defaults[key] !== undefined &&
      urlParams[key] !== undefined &&
      defaults[key] !== urlParams[key]
    ) {
      urlArr.push(`_${key}`);
      urlArr.push(encodeURIComponent(urlParams[key]));
    }
  });

  historyPush(`/${module}/${urlArr.join('/')}`);
};
