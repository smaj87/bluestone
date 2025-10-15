import {
  getMailAvatar,
  isCheckedById,
  isHoverById,
} from 'commons/share_app/containers/Mails/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import CheckedHandler from './CheckedHandler';
import IntersectionLoader from './IntersectionLoader';
import MailBimi from './MailBimi';
import MailCheckButton from './MailCheckButton';
import { MailItemCheckStyled } from './styles';

interface Props {
  id: number;
}

const MailCheck: FC<Props> = ({ id }) => {
  const isHover = useSelector(isHoverById, id);
  const isChecked = useSelector(isCheckedById, id);
  const image = useSelector(getMailAvatar, id);

  return (
    <MailItemCheckStyled>
      {isHover || isChecked || !image ? <MailCheckButton id={id} /> : null}
      {image && !isHover && !isChecked ? <MailBimi image={image} /> : null}
      <IntersectionLoader Component={<CheckedHandler id={id} />} id={id} />
    </MailItemCheckStyled>
  );
};

export default memo(MailCheck);
