import Button from 'commons/Button';
import { FC, memo } from 'commons/utils/react';

interface Props {
  onClick?: VoidFunction;
  label: string;
  isActive: boolean;
}

const ButtonSwitch: FC<Props> = ({ isActive, label, onClick }) => (
  <Button
    $isActive={isActive}
    color={isActive ? 'primary' : 'defaultNeutral'}
    label={label}
    onClick={onClick}
    size="md"
  />
);

export default memo(ButtonSwitch);
