// defined in file dl-email-webclient-components/variables/breakpoints.scss
export const screenBreakpoints = {
  xxs: 375,
  xs: 575,
  sm: 767, // mobile phone breakpoint
  md: 991, // tablet breakpoint
  lg: 1279,
  xlg: 1439,
};

export const isMobileViewport = () => screenBreakpoints.sm >= window.innerWidth;

export const isTabletViewport = () =>
  screenBreakpoints.sm < window.innerWidth &&
  screenBreakpoints.md >= window.innerWidth;

export const isDesktopViewport = () => screenBreakpoints.md < window.innerWidth;

export const isDesktopScreen = () =>
  screenBreakpoints.md < window.innerWidth &&
  screenBreakpoints.xs < window.innerHeight;
