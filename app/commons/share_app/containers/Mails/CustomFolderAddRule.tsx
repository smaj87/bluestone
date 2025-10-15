import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { isCustomFolder } from 'containers/Folders/selectors';

const CustomFolderAddRule: FC = () => {
  const t = useTranslations();
  const isCustom = useSelector(isCustomFolder);

  const onRuleSet = useCallback(() => {
    window.open(
      `${process.env.SETTINGS_URL}/${t('settingsUrlRulesAndRedirections')}/${t('settingsUrlRules')}`,
      '_blank',
    );
  }, []);

  return isCustom ? (
    <>
      <p>{t('components/Rows/RowEmpty/customFolderTitle')}</p>
      <Button
        color="primary"
        label={t('components/Rows/RowEmpty/customFolderSetRuleLink')}
        onClick={onRuleSet}
        size="md"
      />
    </>
  ) : null;
};

export default memo(CustomFolderAddRule);
