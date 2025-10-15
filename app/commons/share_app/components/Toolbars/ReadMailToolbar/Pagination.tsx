import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import {
  getKid,
  isMobile as isMobileSelector,
} from 'commons/hooks/useUserConfig/selectors';
import { getIsMobile } from 'commons/hooks/useUserConfig/utils';
import { PaginationStyled } from 'commons/share_app/components/Pagination/styles';
import { getMidByType } from 'commons/share_app/containers/ReadMail/selectors';
import { dataLayerPush } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { historyPush } from 'commons/utils/route';

import { READ_MAIL_URL } from 'utils/constants';

const Pagination: FC = () => {
  const t = useTranslations();

  const isMobile = useSelector(isMobileSelector);
  const nextMid = useSelector(getMidByType, 'next');
  const prevMid = useSelector(getMidByType, 'prev');

  const goNext = useCallback(() => {
    historyPush(`/${READ_MAIL_URL}/_mid/${nextMid}`);

    dataLayerPush({
      event: 'b_next_message',
      ekid: getStateValueBySelector(getKid),
      event_type: getIsMobile() ? 'mobile' : 'desktop',
    });
  }, [nextMid]);

  const goPrev = useCallback(() => {
    historyPush(`/${READ_MAIL_URL}/_mid/${prevMid}`);

    dataLayerPush({
      event: 'b_previous_message',
      ekid: getStateValueBySelector(getKid),
      event_type: getIsMobile() ? 'mobile' : 'desktop',
    });
  }, [prevMid]);

  return (
    <PaginationStyled>
      <li data-cypress="READMAIL-PAGINATOR-LEFT">
        <Button
          color={isMobile ? 'navbar' : 'secondary'}
          cypressId="BUTTON-NEXT-MAIL"
          icon="chevronLeft"
          isDisabled={nextMid <= 0}
          onClick={goNext}
          shape="square"
          size="md"
          title={t('ctaNextMail')}
        />
      </li>
      <li data-cypress="READMAIL-PAGINATOR-RIGHT">
        <Button
          color={isMobile ? 'navbar' : 'secondary'}
          cypressId="BUTTON-PREV-MAIL"
          icon="chevronRight"
          isDisabled={prevMid <= 0}
          onClick={goPrev}
          shape="square"
          size="md"
          title={t('ctaPrevMail')}
        />
      </li>
    </PaginationStyled>
  );
};

export default memo(Pagination);
