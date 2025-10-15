import Bimi from 'commons/Bimi';
import { BIMI_PLACEMENTS } from 'commons/Bimi/constants';
import { getBimiByMid } from 'commons/share_app/containers/Newsletters/selectors';
import { getInitials } from 'commons/share_app/utils/initials';
import { FC, memo, useMemo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

interface Props {
  nameFrom: string;
  mid: number;
}

const NewsletterBimi: FC<Props> = ({ mid, nameFrom }) => {
  const selectorMid = useMemo(() => ({ mid }), [mid]);
  const bimiImage = useSelector(getBimiByMid, selectorMid);
  const bimiInitials = getInitials(nameFrom);

  return (
    <Bimi
      image={bimiImage}
      initials={bimiInitials}
      placement={BIMI_PLACEMENTS.NEWSLETTER_PAGE}
    />
  );
};

NewsletterBimi.displayName = 'NewsletterBimi';

export default memo(NewsletterBimi);
