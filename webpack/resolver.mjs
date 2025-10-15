import path from 'path';

export default {
  modules: ['node_modules', 'app'],
  alias: {
    root: path.resolve(process.cwd(), './'),
    utils: path.resolve(process.cwd(), 'app/utils'),
    containers: path.resolve(process.cwd(), 'app/containers'),
    images: path.resolve(process.cwd(), 'app/images'),
    components: path.resolve(process.cwd(), 'app/components'),
    db: path.resolve(process.cwd(), 'app/db'),
  },
  extensions: [
    `.${process.env.APP}.js`,
    `.${process.env.APP}.jsx`,
    `.${process.env.APP}.ts`,
    `.${process.env.APP}.tsx`,
    '.js',
    `.jsx`,
    `.ts`,
    `.tsx`,
  ],
  mainFields: ['browser', 'jsnext:main', 'main'],
};
