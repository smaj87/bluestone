import { neutralTheme } from 'commons/Themes/neutralColors';

import { darkCalendar } from './darkCalendar';
import { darkCommons } from './darkCommons';
import { darkContacts } from './darkContacts';
import { darkPayments } from './darkPayments';
import { darkWebmail } from './darkWebmail';

const darkTheme = {
  ...neutralTheme,
  ...darkCommons,
  ...darkWebmail,
  ...darkCalendar,
  ...darkContacts,
  ...darkPayments,
};

export default darkTheme;
