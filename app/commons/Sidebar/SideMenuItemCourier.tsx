import useTranslations from 'commons/hooks/useTranslations';
import { updateFrontCommons } from 'commons/hooks/useUserConfig/actions';
import { getFrontCommons } from 'commons/hooks/useUserConfig/selectors';
import { isCourierTooltipOpen } from 'commons/Sidebar/selector';
import SideMenuItem from 'commons/Sidebar/SideMenuItem';
import SideMenuTooltip from 'commons/Sidebar/SideMenuTooltip';
import { FC, memo, useCallback } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

const SideMenuItemCourier: FC = () => {
  const t = useTranslations();
  const isTooltipOpen = useSelector(isCourierTooltipOpen);

  const onClose = useCallback(() => {
    const frontCommons = getStateValueBySelector(getFrontCommons);

    if (frontCommons?.tooltips?.courier) {
      dispatch(
        updateFrontCommons({
          ...frontCommons,
          tooltips: {
            ...(frontCommons.tooltips || {}),
            courier: 0,
          },
        }),
      );
    }
  }, []);

  const onClick = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <SideMenuItem
      href={process.env.COURIER_URL || ''}
      icon="furgonetka"
      label={t('courier')}
      onClick={onClick}
    >
      {isTooltipOpen && (
        <SideMenuTooltip label={t('courierTooltipMsg')} onClick={onClose} />
      )}
    </SideMenuItem>
  );
};

export default memo(SideMenuItemCourier);
