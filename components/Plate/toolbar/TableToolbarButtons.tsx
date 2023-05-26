"use client";

import AddCol from "@/components/Icons/AddCol";
import AddRow from "@/components/Icons/AddRow";
import RemoveCol from "@/components/Icons/RemoveCol";
import RemoveRow from "@/components/Icons/RemoveRow";
import RemoveTable from "@/components/Icons/RemoveTable";
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
    <View direction="row" align="center">
      <TableToolbarButton
        icon={<TextStyle label="Table" icon={<TableIcon />} />}
        transform={insertTable}
      />
      <TableToolbarButton
        icon={<TextStyle label="Remove Table" icon={<RemoveTable />} />}
        transform={deleteTable}
      />
      <TableToolbarButton
        icon={<TextStyle label="Add Table Row" icon={<AddRow />} />}
        transform={insertTableRow}
      />
      <TableToolbarButton
        icon={<TextStyle label="Remove Table Row" icon={<RemoveRow />} />}
        transform={deleteRow}
      />
      <TableToolbarButton
        icon={<TextStyle label="Add Table Column" icon={<AddCol />} />}
        transform={insertTableColumn}
      />
      <TableToolbarButton
        icon={<TextStyle label="Remove Table Column" icon={<RemoveCol />} />}
        transform={deleteColumn}
      />
    </View>
  </>
);
