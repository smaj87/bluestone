import { DEFAULT_READ_MAIL } from 'commons/share_app/containers/ReadMail/constants';
import MailParser from 'commons/utils/mailParser';

import { TemplateAd } from '../../types';
import { resetStyles, typoStyles } from './styles';
import { NormalizedProducts } from './types';

export const getParsedContent = (adHtml: string, extraStyle = '') => {
  const content = {
    body: '',
    styles: [
      { type: 'block', value: `${resetStyles}` },
      { type: 'block', value: `${typoStyles}` },
    ],
  };

  if (extraStyle) {
    content.styles.push({
      type: 'block',
      value: extraStyle,
    });
  }

  if (adHtml) {
    const mailObject = new MailParser({
      ...DEFAULT_READ_MAIL,
      html: adHtml,
      text: '',
      mlid: 1, // isMailing
    }).getParsedMail();

    content.body = mailObject?.content.body || '';
  }

  return content;
};

export const getBanners = (
  adClickUrl: string,
  banners: TemplateAd['fields']['banners'],
) =>
  banners?.map?.((banner: { fields: { image?: string; url: string } }) => {
    const data = banner.fields;

    return {
      image: data?.image || '',
      url: adClickUrl
        ? `${adClickUrl}${encodeURIComponent(data.url)}`
        : data.url,
    };
  }) || [];

export const getNormalizedData = (
  templateAd: TemplateAd,
): NormalizedProducts => ({
  elementSettings: templateAd?.fields?.elementSettings?.[0]?.fields,
  banners: getBanners(
    templateAd?.meta?.adclick || '',
    templateAd.fields?.banners,
  ),
});
