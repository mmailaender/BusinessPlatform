'use client';

import { useAuth } from '@clerk/nextjs';
import { FqlxProvider } from 'fqlx-client';
import { useEffect, useState } from 'react';

const FAUNA_ENDPOINT = 'https://db.fauna.com';
interface FqlxClientProviderProps {
  children: React.ReactNode;
}

export default function FqlxClientProvider({
  children,
}: FqlxClientProviderProps) {
  const [token, setToken] = useState('');
  const { getToken } = useAuth();

  const fetchToken = async () => {
    const localToken = await getToken({ template: 'fauna' });
    console.log('new token ', localToken);
    setToken(localToken || 'failed');
  };

  setInterval(() => {
    fetchToken();
  }, 60000);

  useEffect(() => {
    fetchToken();
  }, []);

  return (
    <>
      {token ? (
        <FqlxProvider
          config={{
            fqlxSecret: token,
            endpoint: new URL(FAUNA_ENDPOINT),
          }}
          loader={<div>Loading...</div>}
        >
          <>{children}</>
        </FqlxProvider>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
