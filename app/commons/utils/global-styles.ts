import { css } from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { focusVisibleStyles } from 'commons/utils/commonStyles';

import {
  IS_BANNER_OPEN_CLASS,
  IS_MODAL_OPEN_CLASS,
  IS_SIDE_PANEL_OPEN_CLASS,
  IS_SIDEBAR_OPEN_CLASS,
  IS_SUBMENU_OPEN_CLASS,
  VISUALLY_HIDDEN_CLASS,
  VISUALLY_HIDDEN_FOCUSABLE_CLASS,
} from './classNames';
import {
  LAYER_BANNERS,
  LAYER_DROPDOWNS,
  LAYER_MODAL,
  LAYER_NEW_MAIL,
  LAYER_SIDE_PANEL,
  LAYER_TOOLBAR_SUBMENU,
  LAYER_TOOLTIPS,
} from './layers';

export const globalStyles = css`
  * {
    &::selection {
      background: var(--app-primary-bg);
      color: var(--app-primary-txt);
    }

    @media (hover: hover) and (pointer: fine) {
      /* width */
      ::-webkit-scrollbar {
        width: 0.8rem;
        height: 0.8rem;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: var(--scrollbar-track-bg);
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: var(--scrollbar-thumb-bg);
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: var(--scrollbar-thumb-bg--hover);
      }
    }
  }

  html {
    -webkit-tap-highlight-color: var(--tap-bg);
    background: var(--app-bg);
  }

  html,
  body {
    width: 100%;
    min-width: 300px;
  }

  a,
  button,
  textarea,
  input,
  select {
    &:focus-visible {
      ${focusVisibleStyles};
    }
  }

  .app-container {
    width: 100%;
  }

  .app-modals {
    position: relative;
    z-index: ${LAYER_MODAL};
  }

  .app-submenus {
    position: relative;
    z-index: ${LAYER_TOOLBAR_SUBMENU};
  }

  .app-dropdowns {
    position: relative;
    z-index: ${LAYER_DROPDOWNS};
  }

  .app-tooltips {
    position: relative;
    z-index: ${LAYER_TOOLTIPS};
  }

  .app-newmail {
    position: relative;
    z-index: ${LAYER_NEW_MAIL};
  }

  .app-side-panels {
    position: relative;
    z-index: ${LAYER_SIDE_PANEL};
  }

  .app-banners {
    position: relative;
    z-index: ${LAYER_BANNERS};
  }

  .${IS_MODAL_OPEN_CLASS}, .${IS_SIDE_PANEL_OPEN_CLASS} {
    overflow: hidden;
  }

  .${IS_SUBMENU_OPEN_CLASS},
    .${IS_BANNER_OPEN_CLASS},
    .${IS_SIDEBAR_OPEN_CLASS} {
    /* komponenty wyświetlane jedynie na mobile */
    @media screen and (max-width: ${screenMdAbove}) {
      overflow: hidden;
    }
  }

  .${VISUALLY_HIDDEN_CLASS},
    .${VISUALLY_HIDDEN_FOCUSABLE_CLASS}:not(:focus):not(:focus-within) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }
`;
