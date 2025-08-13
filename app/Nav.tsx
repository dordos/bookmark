import Image from 'next/image';
import Link from 'next/link';
import { auth } from '@/lib/auth';
import { MoonStar, SunIcon } from 'lucide-react';
import ThemeChanger from '@/components/theme-changer';

export default async function Nav() {
  const session = await auth();
  const didLogin = !!session?.user;

  return (
    <div className='flex items-center gap-5'>
      <Link href='/' className='active-scale'>
        Home
      </Link>
      <Link
        href={`bookcase/${session?.user?.name}`}
        className='btn-icon'
        title={`${session?.user?.name}Bookcase`}
      ></Link>
      <ThemeChanger></ThemeChanger>

      {didLogin ? (
        <Link href='/my'>
          <Image
            src={session.user?.image || ''}
            alt={session.user?.name || ''}
            width={40}
            height={40}
            className='rounded-full'
          />
        </Link>
      ) : (
        <Link href='/api/auth/signin'>Login</Link>
      )}
    </div>
  );
}
