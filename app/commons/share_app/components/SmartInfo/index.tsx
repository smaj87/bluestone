import { FC, memo, useCallback } from 'commons/utils/react';

import { SmartInfoButton, SmartInfoStyled } from './styles';

interface Props {
  label: string;
}

const SmartInfo: FC<Props> = ({ label }) => {
  const onClick = useCallback(() => {
    window.open(process.env.SMART_INFO_HELP_URL, '_blank');
  }, []);

  return (
    <SmartInfoStyled>
      <SmartInfoButton
        icon="galaxy"
        label={label}
        onClick={onClick}
        size="md"
      />
    </SmartInfoStyled>
  );
};

export default memo(SmartInfo);
