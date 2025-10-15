/**
 * Remove `data-cypress` attribute from jsx elements
 * Remove `cypressId` attribute from jsx elements
 * Remove `id` attribute that have 'CYPRESS' in content
 */
module.exports = function babelRemoveCypressId() {
  // const t = babel.types;

  return {
    visitor: {
      // ArrowFunctionExpression(path) {
      //   const { node } = path;

      //   if (node?.params && t.isObjectPattern(node.params[0])) {
      //     node.params[0].properties?.forEach((property, index) => {
      //       if (property.key.name === 'cypressId') {
      //         path.get(`params.0.properties.${index}`).remove();
      //       }
      //     });
      //   }
      // },
      JSXAttribute(path) {
        const { node } = path;

        if (node.name.name === 'data-cypress') {
          path.remove();
        }

        if (node.name.name === 'cypressId') {
          path.remove();
        }

        if (node.name.name === 'id') {
          if (node.value.value && node.value.value.startsWith('CYPRESS')) {
            path.remove();
          }
        }
      },
    },
  };
};
