import React from 'react';
import {
  TCodeBlockElement,
  Value,
  getRootProps,
  StyledElementProps,
} from '@udecode/plate';

export const H2Element = <V extends Value>(
  props: StyledElementProps<V, TCodeBlockElement>
) => {
  const { attributes, children, nodeProps, element } = props;

  const rootProps = getRootProps(props);

  return (
    <h2
      {...attributes}
      {...rootProps}
      {...nodeProps}
      id={`${element?.id}`}
      className={`py-1 px-0 mt-2 text-[length:var(--rs-font-size-featured-2)] font-[var(--rs-font-weight-heavy)] leading-[var(--rs-line-height-featured-2)] ${rootProps.className}`}
    >
      {children}
    </h2>
  );
};
