import fs from 'fs';
import path from 'path';
import webpack from 'webpack';

/*
 *  SassInitConstantsWebpackPlugin insert js variables into sass files
 */
class SassAddJavascriptConstantsWebpackPlugin {
  constructor(options) {
    this.sassVarsFiles = options.sassVarsFiles;
    this.dataString = '';
  }

  apply(compiler) {
    try {
      /*
       *  Get all js variables
       */
      this.sassVarsFiles.forEach((link) => {
        const filePath = path.resolve(process.cwd(), link);
        const data = fs.readFileSync(filePath, 'utf8');
        const regex =
          /export\s+const\s+(\w*)\s=\s(\w*|'[\w\s,.-]*'|`[\w\s${}*+-.,/]*`);/g;
        const matches = Array.from(data.matchAll(regex), (match) => match[1]);
        const matches2 = Array.from(data.matchAll(regex), (match) => match[2]);

        matches.forEach((key, index) => {
          if (matches2[index].includes('`')) {
            const value = matches2[index]
              .replaceAll('`', '')
              .replaceAll('$', '#')
              .replace(/{([a-zA-Z]+)/g, '{$$$1');
            this.dataString += `$${key}:${value};`;
          } else {
            this.dataString += `$${key}:${matches2[index].replaceAll(
              "'",
              '',
            )};`;
          }
        });
      });
    } catch (err) {
      // console.error(err);
    }

    /*
     *  Add sass loader with additionalData
     */
    compiler.hooks.compilation.tap(
      'SassAddJavascriptConstantsWebpackPlugin',
      (compilation) => {
        webpack.NormalModule.getCompilationHooks(compilation).loader.tap(
          'SassAddJavascriptConstantsWebpackPlugin',
          (_, module) => {
            if (
              /\.scss$/.test(module.resource) &&
              !module.resource.includes('node_modules')
            ) {
              module.loaders.push({
                loader: 'sass-loader',
                options: {
                  additionalData: this.dataString,
                },
              });
            }
          },
        );
      },
    );
  }
}

export default SassAddJavascriptConstantsWebpackPlugin;
