/* eslint consistent-return:0 import/order:0 */

import express from 'express';
import { resolve } from 'path';

import argv from './argv.mjs';
import logger from './logger.mjs';
import setup from './middlewares/frontendMiddleware.mjs';
import port from './port.mjs';

const app = express();

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build_dev'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');  // Możesz zastąpić '*' swoją domeną
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', '*');
//
//   // Opcjonalnie obsługuje preflight requests
//   if (req.method === 'OPTIONS') {
//     return res.status(200).end();
//   }
//
//   next();
// });

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

// Start your app.
app.listen(port, host, async (err) => {
  if (err) {
    return logger.error(err.message);
  }

  logger.appStarted(port, prettyHost);
});
