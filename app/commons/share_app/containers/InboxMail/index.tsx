import { invokeAdsFetch } from 'commons/share_app/components/hooks/useAds';
import Header from 'commons/share_app/components/hooks/useAds/Onet/SlotFlatNatmailing/GenericInbox/DetailHeaders';
import Template from 'commons/share_app/components/hooks/useAds/Onet/SlotFlatNatmailing/GenericInbox/DetailTemplate';
import InboxToolbar from 'commons/share_app/components/Toolbars/InboxToolbar';
import { FC, memo, useEffect } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { setCurrentPage } from 'containers/App/actions';

import { INBOX_CONTAINER_ID, PAGE_NAME } from './constants';
import Hooks from './Hooks';
import { InboxMailContentStyled, InboxMailStyled } from './styles';

interface Props {
  isShow: boolean;
}

const InboxMail: FC<Props> = ({ isShow }) => {
  useEffect(() => {
    if (isShow) {
      dispatch(setCurrentPage(PAGE_NAME));
      dispatch(invokeAdsFetch(PAGE_NAME, ''));
    }
  }, [isShow]);

  return (
    <InboxMailStyled id={INBOX_CONTAINER_ID}>
      <Hooks isShow={isShow} />
      <InboxToolbar isShow={isShow} />
      {isShow ? (
        <InboxMailContentStyled>
          <Header />
          <Template />
        </InboxMailContentStyled>
      ) : null}
    </InboxMailStyled>
  );
};

export default memo(InboxMail);
