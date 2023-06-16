import { DEFAULT_COLORS, DEFAULT_CUSTOM_COLORS } from '@udecode/plate';
import { omit } from 'radash';

export const fontColors = DEFAULT_COLORS.map((color) => omit(color, ['name']));
export const fontCustomColors = DEFAULT_CUSTOM_COLORS.map((color) =>
  omit(color, ['name'])
);
