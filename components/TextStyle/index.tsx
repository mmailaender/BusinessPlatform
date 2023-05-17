"use client";
import {
  View,
  ViewProps,
  Button,
  ButtonProps,
  Text,
  TextProps,
  Tooltip,
  TooltipProps,
} from "reshaped";

import PlusIcon from "../Icons/PlusIcon";
import DocsIcon from "../Icons/DocsIcon";
import { string } from "slate";

export type Props = {
  label: string;
  icon: object;
};

export default function TextStyle({ label, icon }) {
  return (
    <View>
      <Tooltip text={label}>
        {(attributes) => (
          <Button
            icon={icon}
            attributes={attributes}
            size="medium"
            variant="ghost"
          ></Button>
        )}
      </Tooltip>
    </View>
  );
}
