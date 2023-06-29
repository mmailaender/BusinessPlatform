import { UserButton } from '@clerk/nextjs/app-beta';
import { View, Text, Divider, TextField } from 'reshaped';
import { Tabs } from './Tabs';
import SearchField from '@/components/SearchField';

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
              <SearchField />
              <UserButton />
            </View>
          </View>
          <Divider />

          {/* Lower part */}
          <Tabs />

          <Divider blank />
        </View>
      </section>
      {children}
    </>
  );
}
