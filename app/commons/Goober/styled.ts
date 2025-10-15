/* eslint-disable no-restricted-syntax */
// @ts-nocheck
import { createElement, forwardRef, useContext } from 'commons/utils/react';

import cssClassName from './cssClassName';
import { Context } from './GlobalProvider';
import { StyledFunction } from './types';

const styled: StyledFunction = function styled(tag) {
  const _ctx = this || {};

  return function wrapper(...args) {
    function Styled(props, ref) {
      const globalProps = useContext(Context);
      // Grab a shallow copy of the props
      const _props = { ...props, ...globalProps, ref };
      // Keep a local reference to the previous className
      const _previousClassName = _props.className || '';

      // _ctx.p: is the props sent to the context
      _ctx.p = _props;

      // Set a flag if the current components had a previous className
      // similar to goober. This is the append/prepend flag
      _ctx.prepend = /\s*go\d+/.test(_previousClassName);

      if (_ctx.prepend) {
        const match = _previousClassName.match(/(go\d+)\s*$/gi);
        _ctx.prevGClassName = match?.[0] || '';
      }

      _props.className = cssClassName.apply(_ctx, args);

      if (_previousClassName) {
        _props.className = `${_previousClassName} ${_props.className}`;
      }

      // Assign the _as with the provided `tag` value
      let _as = tag;

      // If this is a string -- checking that is has a first valid char
      if (tag[0]) {
        // Try to assign the _as with the given _as value if any
        _as = _props.as || tag;
        // And remove it
        delete _props.as;
      }

      if (!_as.$$isStyled) {
        for (const p in _props) {
          if (p.startsWith('$')) {
            delete _props[p];
          }
        }
      }

      return createElement(_as, _props);
    }

    const component = forwardRef(Styled);
    component.$$isStyled = true;

    return component;
  };
};

export default styled;
