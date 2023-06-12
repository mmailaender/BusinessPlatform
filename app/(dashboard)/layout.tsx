import { UserButton } from '@clerk/nextjs/app-beta';
import { View, Text, Button, Divider } from 'reshaped';

import { TabComponent } from '@/components/Tab';

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
            <View direction='row' gap={4} align='center'>
              <Button>Search</Button>
              <UserButton />
            </View>
          </View>
          <Divider />

          {/* Lower part */}
          <TabComponent />

          <Divider blank />
        </View>
      </section>
      {children}
    </>
  );
}
