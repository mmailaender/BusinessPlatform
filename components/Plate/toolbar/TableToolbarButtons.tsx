"use client";

import TableIcon from "@/components/Icons/TableIcon";
import TextStyle from "@/components/TextStyle";
import { BorderAll } from "@styled-icons/material/BorderAll";
import { BorderBottom } from "@styled-icons/material/BorderBottom";
import { BorderClear } from "@styled-icons/material/BorderClear";
import { BorderLeft } from "@styled-icons/material/BorderLeft";
import { BorderRight } from "@styled-icons/material/BorderRight";
import { BorderTop } from "@styled-icons/material/BorderTop";
import {
  deleteColumn,
  deleteRow,
  deleteTable,
  insertTable,
  insertTableColumn,
  insertTableRow,
  TableToolbarButton,
} from "@udecode/plate";
import { View } from "reshaped";

const tooltip = (content: string) => ({
  content,
});

export const TableToolbarButtons = () => (
  <>
    <View direction="row" gap={1} align="center">
      <TableToolbarButton
        tooltip={tooltip("")}
        icon={<TextStyle label="Table" icon={<TableIcon />} />}
        transform={insertTable}
      />
      <TableToolbarButton
        tooltip={tooltip("Remove Table")}
        icon={<BorderClear />}
        transform={deleteTable}
      />
      <TableToolbarButton
        tooltip={tooltip("Table Row")}
        icon={<BorderBottom />}
        transform={insertTableRow}
      />
      <TableToolbarButton
        tooltip={tooltip("Remove Table Row")}
        icon={<BorderTop />}
        transform={deleteRow}
      />
      <TableToolbarButton
        tooltip={tooltip("Table Column")}
        icon={<BorderLeft />}
        transform={insertTableColumn}
      />
      <TableToolbarButton
        tooltip={tooltip("Remove Table Column")}
        icon={<BorderRight />}
        transform={deleteColumn}
      />
    </View>
  </>
);
