import { closeDropdown } from 'commons/Dropdown/actions';
import { getDropdownParams } from 'commons/Dropdown/selectors';
import {
  GroupButton,
  GroupListItemStyled,
  GroupListStyled,
} from 'commons/GroupActions/styles';
import useTranslations from 'commons/hooks/useTranslations';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { openModal } from 'commons/Modal/actions';
import { close as closeSubmenu } from 'commons/ToolbarSubmenu/actions';
import { getParams } from 'commons/ToolbarSubmenu/selectors';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { ORDER_CHANGE_STATUS_MODAL_ID } from 'components/Modals/OrderChangeStatusConfirmModal/constants';

import { DROPDOWN_POPUP_ID } from './constants';

const dropdownId = { id: DROPDOWN_POPUP_ID };

const OrderMenuContent: FC = () => {
  const t = useTranslations();
  const submenuParams = useSelector(getParams);
  const dropdownParams = useSelector(getDropdownParams, dropdownId);
  const isMobile = useSelector(isMobileSelector);

  const orderId = dropdownParams?.id || submenuParams?.id;

  const openConfirmModal = useCallback(() => {
    if (isMobile) {
      dispatch(closeSubmenu());
    } else {
      dispatch(closeDropdown(DROPDOWN_POPUP_ID));
    }
    dispatch(openModal(ORDER_CHANGE_STATUS_MODAL_ID, { orderId }));
  }, [orderId]);

  return (
    <GroupListStyled>
      <GroupListItemStyled>
        <GroupButton
          color="secondary"
          label={t('orderChangeStatusToClosed')}
          onClick={openConfirmModal}
          size="md"
        />
      </GroupListItemStyled>
    </GroupListStyled>
  );
};

export default memo(OrderMenuContent);
