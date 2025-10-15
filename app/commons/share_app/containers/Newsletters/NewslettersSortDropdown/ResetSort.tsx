import { ResetSortStyled } from 'commons/GroupFilters/styles';
import ButtonReset from 'commons/share_app/components/Buttons/ButtonReset';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { isDot as isDotSelector } from '../selectors';
import { NewslettersSortType } from '../types';

interface Props {
  onClick: (_: any, sortType: NewslettersSortType) => void;
}

const ResetSort: FC<Props> = ({ onClick }) => {
  const isDot = useSelector(isDotSelector);

  const onReset = useCallback(() => {
    onClick(null, 'from');
  }, [onClick]);

  return (
    <ResetSortStyled>
      <ButtonReset isDisabled={!isDot} onClick={onReset} />
    </ResetSortStyled>
  );
};

export default memo(ResetSort);
