'use client';
import { View, Tabs } from 'reshaped';

import Docs from '@/components/Icons/DocsIcon';
import Template from '@/components/Icons/TemplateIcon';
import { useRouter } from 'next/navigation';

export function TabComponent() {
  const router = useRouter();

  const handleTabClick = (location: string) => {
    router.push(location);
  };

  return (
    <View paddingBlock={0} paddingInline={6}>
      <Tabs variant='borderless'>
        <Tabs.List>
          <Tabs.Item value='0' icon={<Docs />}>
            <div onClick={() => handleTabClick('/')}>Documents</div>
          </Tabs.Item>
          <Tabs.Item value='1' icon={<Template />}>
            <div onClick={() => handleTabClick('/templates')}>Templates</div>
          </Tabs.Item>
        </Tabs.List>
      </Tabs>
    </View>
  );
}
