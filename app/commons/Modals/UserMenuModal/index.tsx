import useTranslations from 'commons/hooks/useTranslations';
import Modal from 'commons/Modal';
import { close, openModal } from 'commons/Modal/actions';
import { isOpenByModalId } from 'commons/Modal/selectors';
import { addIdToParentStack } from 'commons/NavTree/actions';
import NavTreeGroup from 'commons/NavTree/NavTreeGroup';
import UserAvatar from 'commons/UserAvatar';
import { USER_MENU_NAV_GROUP_ID } from 'commons/UserMenu/constants';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { USER_MENU_MODAL_ID } from './constants';
import Content from './Content';

interface Props {
  content?: any;
  contentProps?: object;
  modal: string;
}

const UserMenuModal: FC<Props> = ({
  content: Component,
  contentProps,
  modal,
}) => {
  const t = useTranslations();
  const isOpen = useSelector(isOpenByModalId, modal);

  const onOpen = useCallback(() => {
    // FIX dla narratora windowsowego - musimy dodac samemu idGrupy, poniewaz zabiera nam kontrole nad eventami onEnter, space escape itp
    dispatch(addIdToParentStack(USER_MENU_NAV_GROUP_ID));

    dispatch(openModal(modal));
  }, []);

  const onClose = useCallback(() => {
    dispatch(close());
  }, []);

  return (
    <NavTreeGroup
      groupId={USER_MENU_NAV_GROUP_ID}
      isShow
      onEnter={onOpen}
      onEscape={onClose}
    >
      <UserAvatar ariaHasPopup="true" onClick={onOpen} />
      {isOpen && (
        <Modal
          id={USER_MENU_MODAL_ID}
          isTitleHidden
          title={t('modalUserMenuTitle')}
        >
          <Content content={<Component hide={onClose} {...contentProps} />} />
        </Modal>
      )}
    </NavTreeGroup>
  );
};

export default memo(UserMenuModal);
