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
  ELEMENT_TABLE,
  ELEMENT_TODO_LI,
  MediaEmbedElement,
  StyledElement,
  withProps,
  ELEMENT_UL,
  ELEMENT_OL,
  inline,
  RenderFunction,
} from "@udecode/plate";
import { withStyledDraggables } from "./withStyledDraggables";
import { H1Element } from "./H1Element";
import { H2Element } from "./H2Element";
import { H3Element } from "./H3Element";

export const plateUI = withStyledDraggables(
  createPlateUI({
    [ELEMENT_MEDIA_EMBED]: withProps(MediaEmbedElement, {
      nodeProps: {
        twitterOptions: {
          theme: "dark",
        },
      },
    }) as RenderFunction<any>,
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
    }) as RenderFunction<any>,
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
    }) as RenderFunction<any>,

    [ELEMENT_TABLE]: withProps(StyledElement, {
      as: "Table",
      styles: {
        root: {
          width: "100%",
          breakInside: "avoid-page",
          padding: "4px 0",
        },
      } as Record<string, any>,
      prefixClassNames: "p",
    }) as RenderFunction<any>,

    [ELEMENT_H1]: H1Element,
    [ELEMENT_H2]: H2Element,
    [ELEMENT_H3]: H3Element,

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
    }) as RenderFunction<any>,
  })
);
