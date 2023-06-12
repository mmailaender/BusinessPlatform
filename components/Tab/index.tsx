'use client';
import { View, Tabs } from 'reshaped';
import Link from 'next/link';

import Docs from '@/components/Icons/DocsIcon';
import Template from '@/components/Icons/TemplateIcon';

export function TabComponent() {
  return (
    <View paddingBlock={0} paddingInline={6}>
      <Tabs variant='borderless'>
        <Tabs.List>
          <Tabs.Item value='0' icon={<Docs />}>
            <Link href='/'>Documents</Link>
          </Tabs.Item>
          <Tabs.Item value='1' icon={<Template />}>
            <Link href='/templates'>Templates</Link>
          </Tabs.Item>
        </Tabs.List>
      </Tabs>
    </View>
  );
}
