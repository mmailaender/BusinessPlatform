'use client';

import { View, Tabs as ReshapedTabs } from 'reshaped';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Docs from '@/components/Icons/DocsIcon';
import Template from '@/components/Icons/TemplateIcon';

export function Tabs() {
  const path = usePathname();

  return (
    <View paddingBlock={0} paddingInline={6}>
      <ReshapedTabs
        variant='borderless'
        defaultValue={path.includes('templates') ? '1' : '0'}
      >
        <ReshapedTabs.List>
          <ReshapedTabs.Item value='0' icon={<Docs />}>
            <Link href='/' passHref>
              Documents
            </Link>
          </ReshapedTabs.Item>
          <ReshapedTabs.Item value='1' icon={<Template />}>
            <Link href='/templates' passHref>
              Templates
            </Link>
          </ReshapedTabs.Item>
        </ReshapedTabs.List>
      </ReshapedTabs>
    </View>
  );
}
