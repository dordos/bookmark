import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { use } from 'react';

export default function BookCaseIndexx() {
  const session = use(auth());
  if (!session?.user) redirect('/login');

  redirect(`/bookcase/${encodeURI(session.user.name!)}`);
}
