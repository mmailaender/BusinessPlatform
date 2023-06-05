'use client';

import { FqlxProvider } from 'fqlx-client';

interface FqlxClientProviderProps {
  fqlxSecret: string;
  children: React.ReactNode;
}

export default function FqlxClientProvider({
  fqlxSecret,
  children,
}: FqlxClientProviderProps) {
  return (
    <FqlxProvider
      config={{
        fqlxSecret,
        endpoint: new URL('https://db.fauna.com'),
      }}
      loader={<div>Loading...</div>}
    >
      <>{children}</>
    </FqlxProvider>
  );
}
