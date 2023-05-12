import {
  CodeBlockElement,
  createPlateUI,
  ELEMENT_CODE_BLOCK,
  ELEMENT_MEDIA_EMBED,
  ELEMENT_PARAGRAPH,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  MARK_BOLD,
  MARK_ITALIC,
  MARK_UNDERLINE,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  ELEMENT_BLOCKQUOTE,
  MARK_SUPERSCRIPT,
  MARK_COLOR,
  MediaEmbedElement,
  StyledElement,
  withProps,
} from '@udecode/plate';

export const plateUI = createPlateUI({
  [ELEMENT_MEDIA_EMBED]: withProps(MediaEmbedElement, {
    nodeProps: {
      twitterOptions: {
        theme: 'dark',
      },
    },
  }),
  [ELEMENT_CODE_BLOCK]: CodeBlockElement,
  [ELEMENT_PARAGRAPH]: withProps(StyledElement, {
    // as: 'p',
    styles: {
      root: {
        margin: 0,
        padding: '4px 0',
      },
    },
    prefixClassNames: 'p',
  }),
  [ELEMENT_H1]: withProps(StyledElement, {
    as: 'h1',
    styles: {
      root: {
        marginTop: 8,
        padding: '4px 0',
        fontFamily: 'var(--rs-font-family-title-1)',
        lineHeight: 'var(--rs-line-height-title-1)',
        fontWeight: 'var(--rs-font-weight-title-1)',
        fontSize: 'var(--rs-font-size-title-1)',
      },
    },
  }),
  [ELEMENT_H2]: withProps(StyledElement, {
    styles: {
      root: {
        fontWeight: 800,
        fontSize: 6,
        fontFamily:
          'BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
      },
    },
  }),
});
