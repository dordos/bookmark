import { sendRegistCheck } from '@/actions/mailer';
import { v4 as uuidv4 } from 'uuid';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

type SendEmailReqBody = {
  email: string;
  emailcheck: string;
  oldEmailcheck?: string;
  nickname?: string;
  emailType: 'Regist' | 'ResetPassword';
};

export async function POST(req: Request) {
  const {
    email,
    emailcheck,
    oldEmailcheck,
    nickname,
    emailType,
  }: SendEmailReqBody = await req.json();
}

export async function POST(req: Request) {
  const {
    email,
    emailcheck,
    oldEmailcheck,
    nickname,
    emailType,
  }: SendEmailReqBody = await req.json();
  await req.json();

  // resend...
  if (oldEmailcheck) {
    const mbr = await prisma.member.findUnique({ where: { email } });
    if (mbr?.emailcheck !== oldEmailcheck) {
      redirect('/login/error?error=InvalidToken'); // abusing
    }
    const newToken = uuidv4();
    await prisma.member.update({
      data: { emailcheck: newToken },
      where: { email },
    });
    await sendRegistCheck(email, newToken);
  } else {
    const authorization = req.headers.get('authorization');
    if (authorization !== `Bearer ${process.env.INTERNAL_SECRET}`)
      throw new Error('InvalidToken');
    await sendRegistCheck(email, emailcheck);
  }

  return NextResponse.json({ email, message: 'Email Resent.' });
}
