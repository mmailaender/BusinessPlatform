import {
  CodeBlockElement,
  createPlateUI,
  ELEMENT_CODE_BLOCK,
  ELEMENT_MEDIA_EMBED,
  ELEMENT_PARAGRAPH,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_LINK,
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
  ELEMENT_TODO_LI,
  MediaEmbedElement,
  StyledElement,
  withProps,
  ELEMENT_UL,
  ELEMENT_OL,
  inline,
} from "@udecode/plate";
import { withStyledDraggables } from "./withStyledDraggables";

export const plateUI = withStyledDraggables(
  createPlateUI({
    [ELEMENT_MEDIA_EMBED]: withProps(MediaEmbedElement, {
      nodeProps: {
        twitterOptions: {
          theme: "dark",
        },
      },
    }),
    [ELEMENT_CODE_BLOCK]: CodeBlockElement,
    [ELEMENT_PARAGRAPH]: withProps(StyledElement, {
      // as: 'p',
      styles: {
        root: {
          margin: 0,
          padding: "4px 0",
          fontFamily: "var(--rs-font-family-body-2)",
          lineHeight: "var(--rs-line-height-body-2)",
          fontWeight: "var(--rs-font-weight-regular)",
          fontSize: "var(--rs-font-size-body-2)",
        },
      } as Record<string, any>,
      prefixClassNames: "p",
    }),
    // [ELEMENT_UL]: withProps(StyledElement, {
    //   // as: 'p',
    //   styles: {
    //     root: {
    //       fontFamily: "var(--rs-font-family-body-2)",
    //       lineHeight: "var(--rs-line-height-body-2)",
    //       fontWeight: "var(--rs-font-weight-regular)",
    //       fontSize: "var(--rs-font-size-body-2)",
    //     },
    //   } as Record<string, any>,
    //   prefixClassNames: "p",
    // }),
    // [ELEMENT_OL]: withProps(StyledElement, {
    //   // as: 'p',
    //   styles: {
    //     root: {
    //       fontFamily: "var(--rs-font-family-body-2)",
    //       lineHeight: "var(--rs-line-height-body-2)",
    //       fontWeight: "var(--rs-font-weight-regular)",
    //       fontSize: "var(--rs-font-size-body-2)",
    //     },
    //   } as Record<string, any>,
    //   prefixClassNames: "p",
    // }),

    [ELEMENT_TODO_LI]: withProps(StyledElement, {
      as: "ToDo List",
      styles: {
        root: {
          margin: 0,
          padding: "4px 0",
          fontFamily: "var(--rs-font-family-body-2)",
          lineHeight: "var(--rs-line-height-body-2)",
          fontWeight: "var(--rs-font-weight-regular)",
          fontSize: "var(--rs-font-size-body-2)",
        },
      } as Record<string, any>,
      prefixClassNames: "p",
    }),
    [ELEMENT_H1]: withProps(StyledElement, {
      as: "h1",
      styles: {
        root: {
          marginTop: 8,
          padding: "4px 0",
          fontFamily: "var(--rs-font-family-featured-1)",
          lineHeight: "var(--rs-line-height-featured-1)",
          fontWeight: "var(--rs-font-weight-heavy)",
          fontSize: "var(--rs-font-size-featured-1)",
        },
      } as Record<string, any>,
    }),
    [ELEMENT_H2]: withProps(StyledElement, {
      as: "h2",
      styles: {
        root: {
          marginTop: 8,
          padding: "4px 0",
          fontFamily: "var(--rs-font-family-featured-2)",
          lineHeight: "var(--rs-line-height-featured-2)",
          fontWeight: "var(--rs-font-weight-heavy)",
          fontSize: "var(--rs-font-size-featured-2)",
        },
      } as Record<string, any>,
    }),
    [ELEMENT_H3]: withProps(StyledElement, {
      as: "h3",
      styles: {
        root: {
          marginTop: 8,
          padding: "4px 0",
          fontFamily: "var(--rs-font-family-featured-3)",
          lineHeight: "var(--rs-line-height-featured-3)",
          fontWeight: "var(--rs-font-weight-heavy)",
          fontSize: "var(--rs-font-size-featured-3)",
        },
      } as Record<string, any>,
    }),
    [ELEMENT_LINK]: withProps(StyledElement, {
      as: "a",
      styles: {
        root: {
          margin: 0,
          padding: "4px 0",
          color: "var(--rs-color-foreground-primary)",
          fontFamily: "var(--rs-font-family-body-2)",
          lineHeight: "var(--rs-line-height-body-2)",
          fontWeight: "var(--rs-font-weight-regular)",
          fontSize: "var(--rs-font-size-body-2)",
        },
      } as Record<string, any>,
      prefixClassNames: "p",
    }),
  })
);
