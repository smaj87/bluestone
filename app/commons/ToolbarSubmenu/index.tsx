import { AriaHasPopup } from 'commons/Aria/types';
import Button from 'commons/Button';
import { CtaIcon } from 'commons/CallToAction/styles';
import {
  CtaAlign,
  CtaColor,
  CtaShape,
  CtaSize,
} from 'commons/CallToAction/types';
import Dot from 'commons/Dot';
import { IconImage } from 'commons/Icon/iconImage';
import { CounterStyled } from 'commons/ToolbarSubmenu/styles'; // TODO do rozważenia przeniesienie do osobnego komponentu
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { close, open } from './actions';
import { isOpenBySubmenuId } from './selectors';
import Submenu from './Submenu';
import { ToolbarSubmenusIds } from './types';

interface Props {
  ariaHasPopup?: AriaHasPopup;
  label?: string;
  title?: string;
  icon?: IconImage;
  align?: CtaAlign;
  color?: CtaColor;
  size?: CtaSize;
  shape?: CtaShape;
  isDisabled?: boolean;
  isDot?: boolean;
  isMobile?: boolean;
  isArrow?: boolean;
  isActive?: boolean;
  isStretch?: boolean;
  image?: string;
  content?: any;
  counter?: number;
  submenuId?: ToolbarSubmenusIds;
  contentProps?: object;
  classNameButton?: string;
  closeLabel?: string;
  onClickFunc?: () => void;
  isFullScreen?: boolean;
  cypressId?: string;
}

const ToolbarSubmenu: FC<Props> = ({
  align,
  ariaHasPopup,
  classNameButton,
  closeLabel,
  color,
  content: Component,
  contentProps,
  counter,
  cypressId,
  icon,
  image,
  isActive,
  isArrow,
  isDisabled,
  isDot,
  isFullScreen,
  isMobile,
  isStretch,
  label,
  onClickFunc,
  shape,
  size,
  submenuId,
  title,
}) => {
  const onOpen = useCallback(() => {
    if (submenuId) {
      dispatch(open(submenuId));
    }

    onClickFunc?.();
  }, [submenuId, onClickFunc]);

  const isOpen = useSelector(isOpenBySubmenuId, submenuId);

  const onClose = useCallback(() => {
    dispatch(close());
  }, []);

  return (
    <>
      <Button
        $isActive={isActive}
        align={align}
        ariaHasPopup={ariaHasPopup}
        className={classNameButton}
        color={color}
        cypressId={cypressId}
        icon={icon}
        image={image}
        isDisabled={isDisabled}
        isMobile={isMobile}
        isStretch={isStretch}
        label={label}
        onClickCapture={onOpen}
        shape={shape}
        size={size}
        title={title || label}
      >
        {!!counter && counter > 0 && <CounterStyled>{counter}</CounterStyled>}
        {!!isDot && <Dot />}
        {isArrow && (
          <CtaIcon $align="right" $image="chevronDown" $size={size} />
        )}
      </Button>
      {isOpen && (
        <Submenu
          content={<Component hide={onClose} {...contentProps} />}
          hide={onClose}
          isFullScreen={isFullScreen}
          label={closeLabel}
        />
      )}
    </>
  );
};

export default memo(ToolbarSubmenu);
