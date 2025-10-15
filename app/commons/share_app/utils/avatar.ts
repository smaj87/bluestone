const fixedBimiUrls: { [key: string]: string } = {
  'mediaexpert.pl': 'https://ocdn.eu/pocztastatic/bimi/mediaexpert.pl.bimi.svg',
};

export function getAvatarUrl(email = '', mlimg = '', isBimi = false) {
  let url = mlimg;

  if (!url && isBimi) {
    const domain = (email || '').split('@').pop();

    if (domain) {
      url = `${process.env.DOWNLOAD_API_URL}/bimi?domain=${encodeURIComponent(
        domain,
      )}`;
    }
  } else if (!url) {
    url = fixedBimiUrls[(email || '').split('@').pop() || ''] || '';
  }

  return url;
}
