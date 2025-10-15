import fs from 'fs';
import { pathToFileURL } from 'url';

const exts = [
  `.${process.env.APP}.cjs`,
  `.${process.env.APP}.mjs`,
  `.${process.env.APP}.js`,
  `.cjs`,
  `.mjs`,
  `.js`,
];

export default async (path) => {
  let config = null;
  let filePath = `${process.cwd()}${path}`;

  exts.every((ext) => {
    const currentPath = `${filePath}${ext}`;

    if (fs.existsSync(currentPath)) {
      filePath = currentPath;
      return false;
    }

    return true;
  });

  try {
    config = await import(pathToFileURL(filePath));
  } catch (e) {
    const divider =
      '\n------------------------------------------------------------------------\n';
    console.error(`${divider}File not exists: ${filePath}${divider}`);

    throw new Error('File not found');
  }

  return config;
};
