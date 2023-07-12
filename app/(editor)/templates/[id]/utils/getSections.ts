export const getSections = (template: any) => {
  let section = '';

  return (
    template?.reduce(
      (
        prev: { [key: string]: { id: string; [key: string]: any } },
        curr: any
      ) => {
        const elementType = curr?.type;
        const text: string = curr?.children?.[0]?.text as string;
        const id = curr?.id;

        if (elementType === 'h1') {
          section = text;
          prev[section] = { id, [section]: [] };

          return prev;
        }

        if (elementType === 'h2' && prev?.[section]) {
          prev[section][section] = [
            ...prev[section][section],
            { id: curr?.id, h2: text },
          ];

          return prev;
        }

        return prev;
      },
      {} as { [key: string]: { id: string; [key: string]: any } }
    ) || {}
  );
};
