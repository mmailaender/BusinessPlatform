import React from 'react';
import {
  TCodeBlockElement,
  Value,
  getRootProps,
  StyledElementProps,
} from '@udecode/plate';

export const H1Element = <V extends Value>(
  props: StyledElementProps<V, TCodeBlockElement>
) => {
  const { attributes, children, nodeProps, element } = props;

  const rootProps = getRootProps(props);

  return (
    <h1
      {...attributes}
      {...rootProps}
      {...nodeProps}
      id={`${element?.id}`}
      className={`py-1 px-0 mt-2 text-[length:var(--rs-font-size-featured-1)] font-[var(--rs-font-weight-heavy)] leading-[var(--rs-line-height-featured-1)] ${rootProps.className}`}
    >
      {children}
    </h1>
  );
};
