import Button from 'commons/Button';
import { CtaIcon } from 'commons/CallToAction/styles';
import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo, useCallback } from 'commons/utils/react';

import { TRIGGER_ID } from './constants';

interface Props {
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const HideButton: FC<Props> = ({ setIsExpanded }) => {
  const t = useTranslations();

  const collapse = useCallback(() => {
    setIsExpanded(false);
  }, []);

  return (
    <Button
      color="defaultNeutral"
      id={TRIGGER_ID}
      label={t('ctaShowLess')}
      onClick={collapse}
      size="sm"
    >
      <CtaIcon $image="chevronUp" $size="sm" />
    </Button>
  );
};

export default memo(HideButton);
