import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <section>
        <Link href='/templates'>Templates</Link>
        <Link href='/' className='ml-x5'>
          Documents
        </Link>
      </section>
      {children}
    </>
  )
}
