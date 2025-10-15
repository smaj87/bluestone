import Button from 'commons/Button';
import { CtaColor } from 'commons/CallToAction/types';
import useTranslations from 'commons/hooks/useTranslations';
import { getKid } from 'commons/hooks/useUserConfig/selectors';
import { IconImage } from 'commons/Icon/iconImage';
import { dataLayerPush } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import { getStateValueBySelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { goBack } from 'containers/App/actions';

interface Props {
  color?: CtaColor;
  cypressId?: string;
  icon?: IconImage;
}

const ButtonBack: FC<Props> = ({ color, cypressId, icon = 'arrowLeft' }) => {
  const t = useTranslations();

  const onClick = useCallback(() => {
    dispatch(goBack());

    dataLayerPush({
      event: 'b_return_to_list',
      ekid: getStateValueBySelector(getKid),
    });
  }, []);

  return (
    <Button
      color={color}
      cypressId={cypressId}
      icon={icon}
      onClick={onClick}
      size="md"
      title={t('ctaBack')}
    />
  );
};

export default memo(ButtonBack);
