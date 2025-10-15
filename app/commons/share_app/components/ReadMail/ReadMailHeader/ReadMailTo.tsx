import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import ButtonDetails from './ButtonDetails';
import { getToValue } from './selectors';
import { ReadMailToNamesStyled, ReadMailToStyled } from './styles';

const ReadMailTo: FC = () => (
  <ReadMailToStyled>
    <ReadMailToNamesStyled data-cypress="RECEIVER-NAME">
      {useSelector(getToValue)}
    </ReadMailToNamesStyled>
    <ButtonDetails />
  </ReadMailToStyled>
);

export default memo(ReadMailTo);
