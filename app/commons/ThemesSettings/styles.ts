import { labelStyles } from 'commons/FormElements/styles';
import styled, { css } from 'commons/Goober';
import { THEME_PREVIEW_CLASS } from 'commons/ThemesSettings/constants';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { animationStyle, corner } from 'commons/utils/variables';

export const ThemeSettingsStyled = styled('div')`
  display: grid;
  gap: 0.8rem;

  @media screen and (min-width: ${screenMdAbove}) {
    gap: 2.4rem;
  }
`;

export const ThemeSectionStyled = styled('div')``;

export const ThemeSectionTitleStyled = styled('h4')`
  ${labelStyles};
  color: var(--modal-txt);
`;

export const ThemeListStyled = styled('ul')`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: stretch;
  margin: 0 -0.8rem;
  padding: 0;
  list-style: none;
`;

type ThemeItemSize = 'sm' | 'md' | 'lg' | 'xl';

interface ThemeItemStyledProps {
  $size?: ThemeItemSize;
}

const itemSizeSm = css`
  width: 6.25%;
`;

const itemSizeMd = css`
  width: 12.5%;
`;

const itemSizeLg = css`
  width: 25%;
`;

const itemSizeXl = css`
  width: 50%;
`;

export const themeItemSizes: Record<ThemeItemSize, any> = {
  sm: itemSizeSm,
  md: itemSizeMd,
  lg: itemSizeLg,
  xl: itemSizeXl,
};

export const themeItemSizesFunc = ({
  $size,
}: {
  $size?: ThemeItemStyledProps['$size'];
}) => ($size ? themeItemSizes[$size] : '');

export const ThemeItemStyled = styled('li')<ThemeItemStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 0.8rem;
  min-width: 4.4rem;
  ${themeItemSizesFunc};
`;

export interface ThemeButtonStyledProps {
  $isActive?: boolean;
  $color?: string;
}

const isActiveStyles = css`
  box-shadow: 0 0 0 0.4rem var(--cta-primary-bg);
  cursor: default;
  pointer-events: none;
`;

export const ThemeButtonStyled = styled('button')`
  position: relative;
  display: grid;
  justify-content: flex-start;
  align-items: flex-start;
  grid-template-columns: 1fr;
  row-gap: 0.4rem;
  width: 100%;

  @media (hover: hover) {
    cursor: pointer;

    &:hover {
      .${THEME_PREVIEW_CLASS} {
        box-shadow: 0 0 0.8rem var(--modal-shadow);
      }
    }
  }

  &:disabled {
    cursor: default;
    pointer-events: none;
  }
`;

export const ThemePreviewStyled = styled('figure')<ThemeButtonStyledProps>`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: ${corner};
  background: ${({ $color }) => $color || 'none'};
  box-shadow: 0 0 0 var(--modal-shadow);
  transition: box-shadow ${animationStyle};
  overflow: hidden;
  outline: 0.1rem solid var(--modal-line);
  ${({ $isActive }) => ($isActive ? `${isActiveStyles}` : '')};

  img {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ThemeHeaderStyled = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
  }
`;

export const ThemeLabelStyled = styled('div')`
  width: 100%;
  font-size: 1.3rem;
  line-height: 2rem;
  color: var(--modal-txt);
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
`;
