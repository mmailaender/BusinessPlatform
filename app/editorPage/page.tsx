'use client';

import Plate from '@/components/Plate';
import React from 'react';

const Editor = () => {
  return <Plate value={[]} onChange={() => console.log('hello')} />;
};

export default Editor;
