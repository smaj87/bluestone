import beachDark from './images/beach_dark.jpg';
import beachLight from './images/beach_light.jpg';
import mountainDark from './images/mountain_dark.jpg';
import mountainLight from './images/mountain_light.jpg';
import { ThemeBackgrounds } from './types';

const backgrounds: ThemeBackgrounds = {
  beach: {
    light: beachLight,
    dark: beachDark,
  },
  mountain: {
    light: mountainLight,
    dark: mountainDark,
  },
};

export default backgrounds;
