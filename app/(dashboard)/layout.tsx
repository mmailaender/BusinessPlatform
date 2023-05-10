import { UserButton } from '@clerk/nextjs/app-beta';
import { View, Text, Button, Tabs, Divider } from 'reshaped';

import Link from 'next/link';

import Docs from '@/components/Icons/DocsIcon';
import Template from '@/components/Icons/TemplateIcon';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section>
        {/* Header */}
        <View>
          {/* Upper part */}
          <View
            paddingBlock={4}
            paddingInline={6}
            className='flex flex-row justify-between'
          >
            <Text
              variant='featured-2'
              weight='bold'
              className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'
            >
              Business platform
            </Text>

            <Button>Search</Button>
          </View>
          <Divider />

          {/* Lower part */}
          <View paddingBlock={0} paddingInline={6}>
            <Tabs variant='borderless'>
              <Tabs.List>
                <Link href='/'>
                  <Tabs.Item value='0' icon={<Docs />}>
                    Documents
                  </Tabs.Item>
                </Link>
                <Link href='/templates'>
                  <Tabs.Item value='1' icon={<Template />}>
                    Templates
                  </Tabs.Item>
                </Link>
              </Tabs.List>
            </Tabs>
          </View>
          <Divider blank />
        </View>
        <UserButton />
      </section>
      {children}
    </>
  );
}
