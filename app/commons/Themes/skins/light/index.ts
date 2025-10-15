import { neutralTheme } from 'commons/Themes/neutralColors';

import { lightCalendar } from './lightCalendar';
import { lightCommons } from './lightCommons';
import { lightContacts } from './lightContacts';
import { lightPayments } from './lightPayments';
import { lightWebmail } from './lightWebmail';

const lightTheme = {
  ...neutralTheme,
  ...lightCommons,
  ...lightWebmail,
  ...lightCalendar,
  ...lightContacts,
  ...lightPayments,
};

export default lightTheme;
