'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { name: 'Documents', href: '/' },
  { name: 'Templates', href: '/templates' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function Tabs() {
  const path = usePathname();
  return (
    <div className='border-b border-neutral'>
      <nav className='ml-x6 flex space-x-x8' aria-label='Tabs'>
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            href={tab.href}
            style={{ textDecoration: 'none' }}
            className={classNames(
              tab.href === path
                ? 'border-primary text-primary'
                : 'border-white text-neutral-faded hover:border-neutral hover:text-neutral',
              'whitespace-nowrap border-b-2 py-x4 px-x1 text-sm font-medium'
            )}
            aria-current={tab.href === path ? 'page' : undefined}
          >
            {tab.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
