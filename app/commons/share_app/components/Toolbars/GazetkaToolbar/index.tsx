import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { ToolbarTop } from 'commons/Toolbar';
import { ToolbarButtonsStyled } from 'commons/Toolbar/styles';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { goBack } from 'containers/App/actions';

interface Props {
  isShow: boolean;
}

const GazetkaToolbar: FC<Props> = ({ isShow }) => {
  const t = useTranslations();
  const isMobile = useSelector(isMobileSelector);

  const onBack = useCallback(() => {
    dispatch(goBack());
  }, []);

  return !isMobile ? (
    <ToolbarTop isShow={isShow}>
      <ToolbarButtonsStyled>
        <Button
          key="gazetkaContainerLi_1"
          color="secondary"
          icon="arrowLeft"
          onClick={onBack}
          size="md"
          title={t('ctaBack')}
        />
      </ToolbarButtonsStyled>
    </ToolbarTop>
  ) : null;
};

export default memo(GazetkaToolbar);
