import Button from 'commons/Button';
import { CtaIcon } from 'commons/CallToAction/styles';
import useTranslations from 'commons/hooks/useTranslations';
import { scrollToElementById } from 'commons/share_app/utils/scroll';
import { FC, memo, useCallback } from 'commons/utils/react';

import { TRIGGER_ID } from './constants';

interface Props {
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExpandButton: FC<Props> = ({ setIsExpanded }) => {
  const t = useTranslations();

  const scrollToAttachments = useCallback(() => {
    const timer = setTimeout(() => {
      scrollToElementById(TRIGGER_ID);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const expand = useCallback(() => {
    setIsExpanded(true);
    scrollToAttachments();
  }, []);

  return (
    <Button
      color="defaultNeutral"
      label={t('ctaShowMore')}
      onClick={expand}
      size="sm"
    >
      <CtaIcon $image="chevronDown" $size="sm" />
    </Button>
  );
};

export default memo(ExpandButton);
