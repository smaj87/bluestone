import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import webpack from 'webpack';

class CssVarsMinifierWebpackPlugin {
  constructor(options) {
    this.filesWithCssVars = options.filesWithCssVars;
    this.cssVarsWithoutDeclaration = [];
    this.cssVariablesMap = {};
  }

  apply(compiler) {
    /*
     *  Fill initial cssVariablesMap for better minification
     */
    try {
      this.filesWithCssVars.forEach((link) => {
        const filePath = path.resolve(process.cwd(), link);
        const data = fs.readFileSync(filePath, 'utf8');
        const regex = /--[\w+-]+/g;
        const matches = Array.from(data.matchAll(regex), (match) => match[0]);

        matches.forEach((key) => {
          let newValue = this.cssVariablesMap[key];

          if (!newValue) {
            const { length } = Object.keys(this.cssVariablesMap);

            newValue = `--${length.toString(36)}`;

            this.cssVariablesMap[key] = newValue;
          }
        });
      });
    } catch (err) {
      // console.error(err);
    }

    /*
     *  Add loader
     */
    compiler.hooks.compilation.tap(
      'CssVarsMinifierWebpackPlugin',
      (compilation) => {
        webpack.NormalModule.getCompilationHooks(compilation).loader.tap(
          'CssVarsMinifierWebpackPlugin',
          (_, module) => {
            if (
              /\.(js|jsx|ts|tsx)$/.test(module.resource) &&
              !module.resource.includes('node_modules') &&
              !module.resource.includes('mocks')
            ) {
              module.loaders.unshift({
                loader: 'string-replace-loader',
                options: {
                  search: "var\\((--[\\w+-]+)\\)|'(--[\\w+-]+)'",
                  replace: (match, p1, p2) => {
                    const varValue = p1 || p2;
                    let newValue = this.cssVariablesMap[varValue];

                    if (!newValue) {
                      const { length } = Object.keys(this.cssVariablesMap);

                      newValue = `--${length.toString(36)}`;

                      this.cssVarsWithoutDeclaration.push(varValue);
                      this.cssVariablesMap[varValue] = newValue;
                    }

                    return p1 ? `var(${newValue})` : `'${newValue}'`;
                  },
                  flags: 'gi',
                },
              });
            }
            if (
              /\.(css|scss)$/.test(module.resource) &&
              !module.resource.includes('node_modules')
            ) {
              module.loaders.unshift({
                loader: 'string-replace-loader',
                options: {
                  search: 'var\\((--[\\w-]+)\\)|((?<!(\\.|\\w))--[\\w-]+)',
                  replace: (match, p1, p2) => {
                    const varValue = p1 || p2;
                    let newValue = this.cssVariablesMap[varValue];

                    if (!newValue) {
                      const { length } = Object.keys(this.cssVariablesMap);

                      newValue = `--${length.toString(36)}`;

                      this.cssVarsWithoutDeclaration.push(varValue);
                      this.cssVariablesMap[varValue] = newValue;
                    }

                    return p1 ? `var(${newValue})` : newValue;
                  },
                  flags: 'gi',
                },
              });
            }
          },
        );
      },
    );

    /*
     *  Log css vars without declaration
     */
    compiler.hooks.emit.tap('CssVarsMinifierWebpackPlugin', () => {
      if (this.cssVarsWithoutDeclaration.length) {
        process.stdout.write(
          chalk.yellow(
            `\n[Warning]Css vars without declaration: ${this.cssVarsWithoutDeclaration} \n`,
          ),
        );
      }
    });
  }
}

export default CssVarsMinifierWebpackPlugin;
