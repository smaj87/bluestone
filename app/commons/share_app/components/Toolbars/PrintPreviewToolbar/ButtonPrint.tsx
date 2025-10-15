import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo, useCallback } from 'commons/utils/react';

const ButtonPrint: FC = () => {
  const t = useTranslations();

  const onPrint = useCallback(() => {
    window.print();
  }, []);

  return (
    <Button
      color="secondaryNeutral"
      icon="print"
      label={t('ctaPrint')}
      onClick={onPrint}
      size="md"
    />
  );
};

export default memo(ButtonPrint);
