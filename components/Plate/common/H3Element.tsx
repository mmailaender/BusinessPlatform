import React from 'react';
import {
  TCodeBlockElement,
  Value,
  getRootProps,
  StyledElementProps,
} from '@udecode/plate';

export const H3Element = <V extends Value>(
  props: StyledElementProps<V, TCodeBlockElement>
) => {
  const { attributes, children, nodeProps } = props;

  const rootProps = getRootProps(props);

  return (
    <h3
      {...attributes}
      {...rootProps}
      {...nodeProps}
      className={`py-1 px-0 mt-2 text-[length:var(--rs-font-size-featured-3)] font-[var(--rs-font-weight-heavy)] leading-[var(--rs-line-height-featured-3)] ${rootProps.className}`}
    >
      {children}
    </h3>
  );
};
