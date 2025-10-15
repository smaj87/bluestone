import pl from './langs/pl';
// import uk from './langs/uk';

let uk;

if (process.env.LANGS) {
  // eslint-disable-next-line global-require, @typescript-eslint/no-require-imports
  uk = require('./langs/uk').default;
}

export default { pl, uk };
