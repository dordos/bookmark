// 'use client';
// import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { use } from 'react';

type Props = {
  searchParams: Promise<{
    error: string;
    email?: string;
    emailcheck?: string?;
  }>;
};

const getErrorMessage = (error: string) => {
  if (error === 'CheckEmail') return 'Check your regist email for approve!';
  if (error === 'NotMatchPassword') return 'Your are wrong password!';
  if (error === 'NotFound') return 'Not exists email address!';
  if (error === 'WithdrawMember') return 'You are already withdraw!';
  return error;
};

export default function LoginError({ searchParams }: Props) {
  // const searchParams = useSearchParams();
  // const error = searchParams.get('error');
  const { error, email } = use(searchParams);
  return (
    <div className='grid place-items-center h-full'>
      <div className='border p-5 text-center rounded-md'>
        <h1 className='text-xl mb-5'>{getErrorMessage(error)}</h1>
        <Button variant={'outline'} asChild={true}>
          <Link href='/login'>{email || 'OK'}</Link>
        </Button>
        {email && error === 'CheckEmail' && (
          <Button variant={'outline'} asChild={true}>
            <Link href='/api/auth/sendmail?email=${email}&emailcheck=${emailcheck}'>
              {email || 'OK'}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
