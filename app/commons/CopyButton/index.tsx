import Button from 'commons/Button';
import { CtaSize } from 'commons/CallToAction/types';
import Cloud from 'commons/CopyButton/Cloud';
import { FC, memo, useCallback, useRef, useState } from 'commons/utils/react';

import { CLOUD_ANIMATION_TIME } from './constants';
import { CopyButtonStyled } from './styles';

interface Props {
  label?: string;
  size?: CtaSize;
  value: string;
  onCopy?: () => void;
}

interface Clouds {
  key: number;
  timeoutKey: ReturnType<typeof setTimeout>;
}

const CopyButton: FC<Props> = ({ label, onCopy = () => {}, size, value }) => {
  const counter = useRef(0);
  const cloudsRef = useRef<Clouds[]>([]);

  const [clouds, setClouds] = useState<Clouds[]>([]);
  cloudsRef.current = clouds;

  const onClick = useCallback((_, v) => {
    navigator.clipboard.writeText(v);

    setClouds([
      ...cloudsRef.current,
      {
        key: counter.current,
        timeoutKey: setTimeout(() => {
          setClouds((prev) => {
            const tmp = [...prev];
            tmp.shift();

            return tmp;
          });
        }, CLOUD_ANIMATION_TIME),
      },
    ]);

    counter.current += 1;

    onCopy();
  }, []);

  return (
    <CopyButtonStyled>
      <Button
        color={label ? 'primary' : 'secondary'}
        cypressId="BUTTON-COPY"
        icon={label ? undefined : 'copy'}
        label={label || ''}
        onClick={onClick}
        params={value}
        size={size}
      />
      {clouds.map((cloud) => (
        <Cloud key={cloud.key} />
      ))}
    </CopyButtonStyled>
  );
};

CopyButton.displayName = 'CopyButton';

export default memo(CopyButton);
