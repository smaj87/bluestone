/*
 * This plugin removes all ComponentName.displayName = 'ComponentName' expression statements
 */
import chalk from 'chalk';

export default function babelRemoveDisplayName(babel) {
  const t = babel.types;

  return {
    visitor: {
      AssignmentExpression(path) {
        const { node } = path;
        if (t.isMemberExpression(node.left)) {
          if (t.isIdentifier(node.left.property, { name: 'displayName' })) {
            if (t.isStringLiteral(node.right)) {
              const displayName = node.right.value;

              if (t.isIdentifier(node.left.object)) {
                const componentName = node.left.object.name;
                const isComponentNameEqualDisplayName =
                  displayName === componentName;

                if (!isComponentNameEqualDisplayName) {
                  process.stdout.write(
                    chalk.yellow(
                      `\n[Warning]Component name: ${componentName} is different from displayName: ${displayName} \n`,
                    ),
                  );
                }

                path.remove();
              }
            }

            if (t.isTemplateLiteral(node.right)) {
              if (t.isIdentifier(node.left.object)) {
                path.remove();
              }
            }
          }
        }
      },
    },
  };
}
