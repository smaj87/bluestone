import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import MailDetailIframe from 'components/MailDetailIframe';

import { getFooterData } from './selectors';
import { FooterContentStyled, FooterStyled } from './styles';

const Footer: FC = () => {
  const data = useSelector(getFooterData);

  return data.img || data.content.body ? (
    <FooterStyled
      $bgColor={data.styles.backgroundColor}
      $txtColor={data.styles.color}
    >
      {data.img ? (
        <figure>
          <img alt="" data-cypress="INBOX-DETAIL-FOOTER-LOGO" src={data.img} />
        </figure>
      ) : null}
      {data.content.body ? (
        <FooterContentStyled data-cypress="INBOX-DETAIL-FOOTER">
          <MailDetailIframe
            content={data.content as ReadMailParsed['content']}
            isSandbox={false}
            isShowImages
            isSwipeEnabled={false}
          />
        </FooterContentStyled>
      ) : null}
    </FooterStyled>
  ) : null;
};

export default memo(Footer);
