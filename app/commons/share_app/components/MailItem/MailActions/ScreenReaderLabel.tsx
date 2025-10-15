import MobileLoader from 'commons/MobileLoader';
import { VISUALLY_HIDDEN_CLASS } from 'commons/utils/classNames';
import { FC, memo } from 'commons/utils/react';

interface Props {
  label: string;
}

const ScreenReaderLabel: FC<Props> = ({ label }) => (
  <MobileLoader
    desktop={<span className={VISUALLY_HIDDEN_CLASS}>{label}</span>}
  />
);

export default memo(ScreenReaderLabel);
