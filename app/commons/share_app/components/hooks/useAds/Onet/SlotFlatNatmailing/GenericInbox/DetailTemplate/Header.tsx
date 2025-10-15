import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import MailDetailIframe from 'components/MailDetailIframe';

import { getHeaderData } from './selectors';
import { HeaderContentStyled, HeaderStyled } from './styles';

const Header: FC = () => {
  const data = useSelector(getHeaderData);

  return data.img || data.content.body ? (
    <HeaderStyled
      $bgColor={data.styles.backgroundColor}
      $txtColor={data.styles.color}
    >
      {data.img ? (
        <figure>
          <img alt="" src={data.img} />
        </figure>
      ) : null}
      {data.content.body ? (
        <HeaderContentStyled>
          <MailDetailIframe
            content={data.content as ReadMailParsed['content']}
            isSandbox={false}
            isShowImages
            isSwipeEnabled={false}
          />
        </HeaderContentStyled>
      ) : null}
    </HeaderStyled>
  ) : null;
};

export default memo(Header);
