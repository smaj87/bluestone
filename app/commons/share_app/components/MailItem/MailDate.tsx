import { ListItemAreaContentStyled } from 'commons/share_app/components/ListElements/List/styles';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import DateTime from 'components/DateTime';
import { ACCURACY_DAYS, ACCURACY_MINUTES } from 'components/DateTime/constants';
import { getMailsUrlProps } from 'containers/App/selectors';

import { MailDateStyled } from './styles';

interface Props {
  stringDate: string;
}

const MailDate: FC<Props> = ({ stringDate }) => {
  const isSort = useSelector(getMailsUrlProps, 'sort') === 'date';
  const isDir = useSelector(getMailsUrlProps, 'sortDir') === 'desc';

  return (
    <MailDateStyled>
      <ListItemAreaContentStyled>
        <DateTime
          dateAccuracy={isSort && isDir ? ACCURACY_MINUTES : ACCURACY_DAYS}
          dateTime={stringDate}
        />
      </ListItemAreaContentStyled>
    </MailDateStyled>
  );
};

export default memo(MailDate);
