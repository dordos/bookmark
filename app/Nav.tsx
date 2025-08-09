import { auth } from '@/lib/auth';
import Link from 'next/link';
import Image from 'next/image';

export default async function Nav() {
  const session = await auth();
  const didLogin = !!session?.user;

  return (
    <>
      <Link href='/'>Home</Link>
      {didLogin ? (
        <Image
          src={session.user?.image || ''}
          alt={session.user.name || ''}
          width={100}
          height={100}
        />
      ) : (
        <button>Login</button>
      )}
    </>
  );
}
