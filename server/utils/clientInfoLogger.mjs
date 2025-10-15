import chalk from 'chalk';

import { dirVersion } from './version.mjs';

const divider = chalk.green('\n---------------------------------------');

const libName =
  process.env.IS_PREACT === 'TRUE' ? chalk.green('preact') : chalk.red('react');
const version = `(${chalk.gray(dirVersion)})`;

export default () => {
  const node_version = `NodeJS version: ${process.version}`;

  // eslint-disable-next-line no-console
  console.log(
    `${divider}\nClient info ${version}: ${chalk.green.bold(
      process.env.APP,
    )} - ${libName}\n${node_version}${divider}`,
  );
};
