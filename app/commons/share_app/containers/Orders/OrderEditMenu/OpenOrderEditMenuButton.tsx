import Button from 'commons/Button';
import { CtaIcon } from 'commons/CallToAction/styles';
import { open } from 'commons/Dropdown/actions';
import useTranslations from 'commons/hooks/useTranslations';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { open as openSubmenu } from 'commons/ToolbarSubmenu/actions';
import { dataLayerPush } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { Order } from '../types';
import {
  DROPDOWN_POPUP_ID,
  DROPDOWN_TARGET_ID,
  ORDER_EDIT_SUBMENU_ID,
} from './constants';

interface Props {
  id: Order['id'];
}

const OpenOrderEditMenuButton: FC<Props> = ({ id }) => {
  const t = useTranslations();
  const isMobile = useSelector(isMobileSelector);
  const targetId = `${DROPDOWN_TARGET_ID}-${id}`;

  const openOrderEditMenu = useCallback(() => {
    dataLayerPush({
      event: 'orders_change_status',
    });

    if (isMobile) {
      dispatch(openSubmenu(ORDER_EDIT_SUBMENU_ID, { id }));
    } else {
      dispatch(
        open(DROPDOWN_POPUP_ID, {
          targetId,
          params: {
            menuSize: 'fit',
            id,
          },
        }),
      );
    }
  }, [isMobile, targetId]);

  return (
    <Button
      color="secondary"
      id={targetId}
      onClick={openOrderEditMenu}
      size="md"
      title={t('orderEdit')}
    >
      <CtaIcon $image="menuMoreVertical" $size="md" />
    </Button>
  );
};

export default memo(OpenOrderEditMenuButton);
