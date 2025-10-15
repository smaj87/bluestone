import LabelNew from 'commons/LabelNew';
import { HeaderWithLabelNewStyled } from 'commons/share_app/components/ShoppingPages/styles';
import { FC } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { isHideIsNew as isHideIsNewSelector } from '../selectors';
import Sender from './Sender';

interface Props {
  isNew: boolean;
  email: string;
  name: string;
}

const CouponSender: FC<Props> = ({ email, isNew, name }) => {
  const isHideIsNew = useSelector(isHideIsNewSelector);

  return (
    <HeaderWithLabelNewStyled>
      {isNew && !isHideIsNew ? (
        <>
          <Sender email={email} name={name} />
          <LabelNew />
        </>
      ) : (
        <Sender email={email} name={name} />
      )}
    </HeaderWithLabelNewStyled>
  );
};

export default CouponSender;
