import { closeEmoji } from 'commons/Emoji/actions';
import EmojiContent from 'commons/Emoji/EmojiContent';
import { getCallback, isOpen as isOpenSelector } from 'commons/Emoji/selectors';
import useTranslations from 'commons/hooks/useTranslations';
import Modal from 'commons/Modal';
import { ButtonAction, ModalActionsStyled } from 'commons/Modal/styles';
import { IS_MODAL_OPEN_CLASS } from 'commons/utils/classNames';
import { FC, memo, useCallback, useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { EMOJI_MODAL_ID } from './constants';

const EmojiModal: FC = () => {
  const t = useTranslations();
  const isOpen = useSelector(isOpenSelector);
  const callback = useSelector(getCallback);

  useEffect(() => {
    if (isOpen) {
      document.getElementById('app-body')?.classList.add(IS_MODAL_OPEN_CLASS);
    } else {
      document
        .getElementById('app-body')
        ?.classList.remove(IS_MODAL_OPEN_CLASS);
    }
  }, [isOpen]);

  const hide = useCallback(() => {
    dispatch(closeEmoji());
  }, []);

  return isOpen ? (
    <Modal id={EMOJI_MODAL_ID} onClose={hide} title={t('emojiModalTitle')}>
      <EmojiContent hide={hide} onEmoji={callback} />
      <ModalActionsStyled>
        <ButtonAction
          color="primary"
          label={t('ctaClose')}
          onClick={hide}
          size="lg"
        />
      </ModalActionsStyled>
    </Modal>
  ) : null;
};

export default memo(EmojiModal);
