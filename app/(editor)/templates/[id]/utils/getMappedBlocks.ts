export const blocks = (value: any) => {
  let key: string = '';
  return value.reduce(
    (
      acc: any[],
      curr: { type: string; children: { text: string }[] },
      index: number
    ) => {
      //block
      const obj: { [key: string]: any } = {};

      if (
        (index === 0 && ['p', 'h1'].includes(curr.type)) ||
        curr.type === 'h1'
      ) {
        key = curr.children[0].text as string;
        obj[key] = {
          type: 'Template',
          category: 'Section',
          name: curr.type,
          content: [curr],
        };

        acc = [...acc, obj];
        return acc;
      }

      const blockIndex = acc?.findIndex((block: { [key: string]: any }) =>
        Boolean(block?.[key])
      );

      if (blockIndex !== -1) {
        // issue fix
        acc[blockIndex][key] = {
          ...acc[blockIndex][key],
          content: [...(acc[blockIndex]?.[key]?.content || {}), curr],
        };

        return acc;
      }

      return acc;
    },
    [] as {}[]
  );
};