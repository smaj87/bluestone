import MailingMarkedHandler from 'commons/share_app/components/MailItem/MailingMarkedHandler';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { FOLDER_SPAM_KEY } from 'containers/Folders/constants';
import { isFolderByKey } from 'containers/Folders/selectors';

import ButtonFavourite from './ButtonFavourite';
import HoverHandler from './HoverHandler';
import IntersectionLoader from './IntersectionLoader';
import MailActions from './MailActions';
import MailCheck from './MailCheck';
import MailData from './MailData';
import MailStatus from './MailStatus';
import SeenHandler from './SeenHandler';
import { MailItemFavStyled, MailItemStatusStyled } from './styles';

interface Props {
  id: number;
}

export const MailItemContentDesktop: FC<Props> = ({ id }) => {
  const isSpam = useSelector(isFolderByKey, FOLDER_SPAM_KEY);

  return (
    <>
      <MailCheck id={id} />
      {!isSpam ? (
        <MailItemFavStyled>
          <ButtonFavourite id={id} />
        </MailItemFavStyled>
      ) : null}
      <MailItemStatusStyled>
        <MailStatus id={id} />
        <IntersectionLoader Component={<SeenHandler id={id} />} id={id} />
      </MailItemStatusStyled>
      <MailData id={id} />
      <MailActions id={id} />
      <IntersectionLoader Component={<HoverHandler id={id} />} id={id} />
      <IntersectionLoader
        Component={<MailingMarkedHandler id={id} />}
        id={id}
      />
    </>
  );
};

export default memo(MailItemContentDesktop);
