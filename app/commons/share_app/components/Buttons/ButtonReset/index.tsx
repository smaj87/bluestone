import { ButtonResetStyled } from 'commons/GroupFilters/styles';
import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

interface Props {
  onClick?: () => void;
  isDisabled?: boolean;
}

const ButtonReset: FC<Props> = ({ isDisabled, onClick }) => {
  const t = useTranslations();

  return (
    <ButtonResetStyled
      color="secondary"
      cypressId="BUTTON-RESET-SORT"
      isDisabled={isDisabled}
      label={t('ctaReset')}
      onClick={onClick}
      size="md"
    />
  );
};

export default memo(ButtonReset);
