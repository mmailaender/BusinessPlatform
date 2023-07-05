'use client';

import { useAuth } from '@clerk/nextjs';
import { FqlxProvider } from 'fqlx-client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Loader } from 'reshaped';

const FAUNA_ENDPOINT = 'https://db.fauna.com';

interface FqlxClientProviderProps {
  children: React.ReactNode;
}

export default function FqlxClientProvider({
  children,
}: FqlxClientProviderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [token, setToken] = useState('');
  const { userId, getToken } = useAuth();

  const fetchToken = async () => {
    const localToken = await getToken({ template: 'fauna' });
    if (localToken !== token) {
      console.log('new token ', localToken);
      setToken(localToken || 'invalid');
    }
  };

  useEffect(() => {
    let intervalId: any = null;

    const startInterval = () => {
      intervalId = setInterval(fetchToken, 55000);
    };

    const stopInterval = () => {
      clearInterval(intervalId);
    };

    startInterval();

    return () => {
      stopInterval();
    };
  }, []);

  useEffect(() => {
    fetchToken();
  }, [userId]);

  useEffect(() => {
    if (token === 'invalid') {
      router.push('/sign-in');
    }
  }, [token]);

  return (
    <>
      {!token && <Loader />}

      {pathname === '/sign-in' && children}

      {token && token !== 'invalid' && (
        <FqlxProvider
          config={{
            fqlxSecret: token,
            endpoint: new URL(FAUNA_ENDPOINT),
          }}
          loader={<div>Loading...</div>}
        >
          <>{children}</>
        </FqlxProvider>
      )}
    </>
  );
}
