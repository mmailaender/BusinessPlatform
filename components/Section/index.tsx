"use client";
import { Button, View, Text, MenuItem, DropdownMenu, Tooltip } from "reshaped";
import React from "react";

import MoreIcon from "../Icons/MoreIcon";
import RenameIcon from "../Icons/RenameIcon";
import DuplicateIcon from "../Icons/DuplicateIcon";
import BinIcon from "../Icons/BinIcon";

const maxLength = 35;

export default function Section({ title }: any) {
  const truncatedText =
    title?.length > maxLength ? `${title.substring(0, maxLength)}...` : title;
  const showTooltip = title?.length > maxLength;

  const handleMoreButtonClick = (
    event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ) => {
    event.stopPropagation(); // Stop the event from propagating to parent elements
    // Perform rename action here
  };

  return (
    <View width="100%">
      <MenuItem
        className="group"
        roundedCorners={true}
        endSlot={
          <DropdownMenu position="bottom-start">
            <DropdownMenu.Trigger>
              {(attributes) => (
                <Button
                  onClick={handleMoreButtonClick}
                  icon={<MoreIcon />}
                  size="small"
                  variant="ghost"
                  rounded
                  attributes={attributes}
                  className="opacity-0 group-hover:opacity-100 transform transition-all duration-300"
                ></Button>
              )}
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Section>
                <DropdownMenu.Item
                  onClick={handleMoreButtonClick}
                  startSlot={<RenameIcon />}
                >
                  Rename
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  onClick={handleMoreButtonClick}
                  startSlot={<DuplicateIcon />}
                >
                  Duplicate
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  onClick={handleMoreButtonClick}
                  startSlot={<BinIcon />}
                >
                  Delete
                </DropdownMenu.Item>
              </DropdownMenu.Section>
            </DropdownMenu.Content>
          </DropdownMenu>
        }
      >
        {showTooltip && (
          <Tooltip text={title}>
            {(attributes) => (
              <Text attributes={attributes}>{truncatedText}</Text>
            )}
          </Tooltip>
        )}
        {!showTooltip && title}
      </MenuItem>
    </View>
  );
}
