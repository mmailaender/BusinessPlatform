'use client';

import { Button, View, Text, MenuItem, DropdownMenu, Tooltip } from 'reshaped';
import React from 'react';

const maxLength = 35;

const handleScroll = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const rect = section.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    window.scrollTo({
      top: rect.top + scrollTop - 150,
      behavior: 'smooth',
    });
  } else {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
};

export default function Section({ title, sectionId }: any) {
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
    <View width='100%'>
      <MenuItem
        onClick={() => handleScroll(sectionId)}
        className='group'
        roundedCorners={true}
      >
        {showTooltip && (
          <Tooltip text={title}>
            {(attributes) => (
              <Text
                attributes={attributes}
                className='text-ellipsis  break-words'
              >
                {truncatedText}
              </Text>
            )}
          </Tooltip>
        )}
        {!showTooltip && title}
      </MenuItem>
    </View>
  );
}
