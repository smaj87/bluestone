/* eslint-disable no-param-reassign */
import { arrowSize } from '../../ContextMenu/styles';

type PopperinoPosition = 'top' | 'left' | 'bottom' | 'right';

type PopperinoVariant = 'start' | 'middle' | 'end';

export type PopperinoPlacement =
  | `${PopperinoPosition}-${PopperinoVariant}`
  | PopperinoPosition;

export type PopperinoOptions = {
  placement: PopperinoPlacement;
  reference?: HTMLElement;
  popper?: HTMLElement;
  positionFlipOrder?: PopperinoPosition[];
  isFlippingDisabled?: boolean;
  isCloudMobileView?: boolean;
};

export interface PopperinoInstance {
  destroy: () => void;
}

// Export default
export const defaults: PopperinoOptions = {
  placement: 'bottom',
  isFlippingDisabled: false,
};

const defaultPositionFlipOrder: Record<PopperinoPosition, PopperinoPosition[]> =
  {
    bottom: ['bottom', 'top', 'left', 'right'],
    top: ['top', 'left', 'bottom', 'right'],
    right: ['right', 'bottom', 'left', 'top'],
    left: ['left', 'bottom', 'right', 'top'],
  };

/**
 * Light popper alternative.
 * @param reference
 * @param popper
 * @param options
 */
export const createPopperino = (
  reference: HTMLElement,
  popper: HTMLElement,
  options?: Partial<PopperinoOptions>,
): PopperinoInstance => {
  popper.style.position = 'fixed';

  const arrow = popper.querySelector(
    '[data-popper-arrow]',
  ) as HTMLElement | null;

  const update = (positionFlipIndex = 0) => {
    const { isCloudMobileView, isFlippingDisabled, placement } = {
      ...defaults,
      ...options,
    };

    const [refBox, popBox] = [reference, popper].map((x) =>
      x.getBoundingClientRect(),
    );

    const [pos, variant] = placement.split('-') as [
      PopperinoPosition,
      PopperinoVariant | undefined,
    ];

    const positionFlipOrder =
      options?.positionFlipOrder ?? defaultPositionFlipOrder[pos];
    const position = positionFlipOrder[positionFlipIndex];

    // Reset popper position
    popper.style.position = 'fixed';
    popper.style.top = '0';
    popper.style.left = '0';

    const coords = {
      x: 0,
      y: 0,
    };

    /**
     * when bottom or top, main axis is X, main side is width
     * when left or right, main axis is Y, main side is height
     */
    const mainAxis = ['bottom', 'top'].includes(position) ? 'x' : 'y';
    const isX = mainAxis === 'x';
    const crossAxis = isX ? 'y' : 'x';
    const mainSide = mainAxis === 'x' ? 'width' : 'height';
    const crossSide = isX ? 'height' : 'width';

    coords[mainAxis] =
      refBox[mainAxis] - popBox[mainSide] / 2 + refBox[mainSide] / 2;

    // Variants (bottom-start, bottom-end etc.)
    const variantOffset = Math.abs(0.5 * (refBox[mainSide] - popBox[mainSide]));
    const variantOffsetSide = +!!variant * (variant === 'start' ? 1 : -1); // `!!` converts undefined / string to false / true, `+` converts bool to 0 / 1
    coords[mainAxis] += variantOffset * variantOffsetSide;

    // Position
    const positionOffset = ['left', 'top'].includes(position)
      ? -popBox[crossSide]
      : refBox[crossSide];
    coords[crossAxis] = refBox[crossAxis] + positionOffset;

    if (isCloudMobileView) {
      coords.x = 0;
    }

    if (!isFlippingDisabled) {
      const maxPositionFlipIndex = positionFlipOrder.length - 1;

      if (
        positionFlipIndex < maxPositionFlipIndex &&
        (coords.x < 0 ||
          coords.x + popBox.width > window.innerWidth ||
          coords.y < 0 ||
          coords.y + popBox.height > window.innerHeight)
      ) {
        update(++positionFlipIndex);
        return;
      }
    }

    // Round coordinates, it fixes drop-shadow
    coords.x = Math.round(coords.x);
    coords.y = Math.round(coords.y);

    // Make coordinates even, it fixes drop-shadow
    coords.x = coords.x % 2 !== 0 ? coords.x + 1 : coords.x;
    coords.y = coords.y % 2 !== 0 ? coords.y + 1 : coords.y;

    // Set popper position
    const placementAttribute = variant ? `${position}-${variant}` : position;
    popper.setAttribute('data-popper-placement', placementAttribute);
    popper.style.transform = `translate(${coords.x}px, ${coords.y}px)`;

    // Calculate arrow position
    if (arrow) {
      // Reset arrow styles
      arrow.style.top = '';
      arrow.style.left = '';

      const arrowCoord =
        refBox[mainAxis] - coords[mainAxis] + refBox[mainSide] / 2;

      arrow.style[mainAxis === 'x' ? 'left' : 'top'] = '0';
      arrow.style.transform = `translate${mainAxis.toUpperCase()}(calc(${arrowCoord}px - ${arrowSize}))`;
    }
  };

  update();

  const onUpdate = () => {
    update();
  };

  // Set up updating on events
  ['scroll', 'resize'].forEach((eventType) =>
    window.addEventListener(eventType, onUpdate, {
      capture: true,
    }),
  );

  return {
    destroy: () => {
      ['scroll', 'resize'].forEach((eventType) =>
        window.removeEventListener(eventType, onUpdate),
      );
    },
  };
};
