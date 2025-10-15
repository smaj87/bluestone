import useTranslations from 'commons/hooks/useTranslations';
import MailFlag from 'commons/share_app/components/MailItem/MailStatus/MailFlag';
import {
  isMailFraud as isMailFraudSelector,
  isMailSendFail as isMailSendFailSelector,
  isMailTrusted as isMailTrustedSelector,
} from 'commons/share_app/containers/Mails/selectors';
import { FC, memo, useCallback, useMemo, useState } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { MailBimiMobileStyled } from './styles';

interface Props {
  id: number;
  image: string;
  initials: string;
  onImageLoaded: () => void;
}

const MailBimiMobile: FC<Props> = ({ id, image, initials, onImageLoaded }) => {
  const t = useTranslations();
  const isMailTrusted = useSelector(isMailTrustedSelector, id);
  const isMailSendFail = useSelector(isMailSendFailSelector, id);
  const isMailFraud = useSelector(isMailFraudSelector, id);

  const [isError, setIsError] = useState(false);

  const onError = useCallback(() => setIsError(true), []);

  const status = useMemo(() => {
    let result = (
      <>
        {image && !isError ? (
          <img
            alt=""
            loading="lazy"
            onError={onError}
            onLoad={onImageLoaded}
            src={image}
          />
        ) : (
          initials
        )}
      </>
    );

    if (isMailFraud) {
      result = (
        <MailFlag
          flag="error"
          icon="errorCircle"
          screenReaderLabel={t(
            'components/Tooltip/TooltipFraudSuspicion/title',
          )}
        />
      );
    } else if (isMailSendFail) {
      result = (
        <MailFlag
          flag="error"
          icon="errorCircle"
          screenReaderLabel={t(
            'components/Tooltips/TooltipSendError/titleExtended',
          )}
        />
      );
    } else if (isMailTrusted) {
      result = (
        <MailFlag
          flag="success"
          icon="shield"
          screenReaderLabel={t('components/TrustedSenderInfo/title')}
        />
      );
    }

    return result;
  }, [isMailTrusted, isMailSendFail, isMailFraud]);

  return <MailBimiMobileStyled>{status}</MailBimiMobileStyled>;
};

export default memo(MailBimiMobile);
