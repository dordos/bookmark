import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { BookMarkedIcon } from 'lucide-react';
import Nav from './Nav';
import { use } from 'react';
import { auth } from '@/lib/auth';
import { SessionProvider } from 'next-auth/react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Book % Mark',
  description: 'Social BookMark Service',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = use(auth());
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='flex'>
          <SessionProvider session={session}>
            <header className='flex justify-between'>
              <h1 className='text-3xl flex items-center tracking-tight font-bold'>
                <BookMarkedIcon />
                Book & Mark
              </h1>
              <Nav>login</Nav>
            </header>
            <main className='h-screen'>{children}</main>
            <footer className='mt-auto'>@appgineer</footer>
          </SessionProvider>
        </div>
      </body>
    </html>
  );
}
