import useTranslations from 'commons/hooks/useTranslations';
import { invokeAdsFetch } from 'commons/share_app/components/hooks/useAds';
import GazetkaToolbar from 'commons/share_app/components/Toolbars/GazetkaToolbar';
import { FC, memo, useEffect } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { setCurrentPage } from 'containers/App/actions';

import { GAZETKA_CONTAINER_ID, PAGE_NAME } from './constants';
import Hooks from './Hooks';
import Slot from './Slot';
import {
  GazetkaLabelStyled,
  GazetkaMailContentStyled,
  GazetkaMailStyled,
} from './styles';

interface Props {
  isShow: boolean;
}

const GazetkaMail: FC<Props> = ({ isShow }) => {
  const t = useTranslations();

  useEffect(() => {
    if (isShow) {
      dispatch(setCurrentPage(PAGE_NAME));
      dispatch(invokeAdsFetch(PAGE_NAME, ''));
    }
  }, [isShow]);

  return (
    <GazetkaMailStyled id={GAZETKA_CONTAINER_ID}>
      <Hooks isShow={isShow} />
      <GazetkaToolbar isShow={isShow} />
      <GazetkaMailContentStyled>
        <GazetkaLabelStyled>{t('ad')}</GazetkaLabelStyled>
        <Slot isShow={isShow} />
      </GazetkaMailContentStyled>
    </GazetkaMailStyled>
  );
};

export default memo(GazetkaMail);
