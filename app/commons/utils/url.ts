export const redirectOnce = (() => {
  let executed = false;

  return (redirectUrl: string) => {
    if (!executed) {
      window.location.assign(redirectUrl);
      executed = true;
    }
  };
})();

export const changeGetParams = (
  url: string,
  fields: string[],
  data?: { [key: string]: any },
) => {
  let result = url;

  try {
    const urlObj = new URL(url);

    fields.forEach((field) => {
      if (data?.[field]) {
        urlObj.searchParams.set(field, data[field]);
      }
    });

    result = urlObj.toString();
  } catch {}

  return result;
};
