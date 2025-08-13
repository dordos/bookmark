import { SessionProvider } from 'next-auth/react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { use } from 'react';
import { BookMarkedIcon } from 'lucide-react';
import { auth } from '@/lib/auth';
import Nav from './Nav';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Book & Mark',
  description: 'Social BookMark Service',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = use(auth());

  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider session={session}>
            <div className='flex flex-col container justify-center mx-auto w-screen'>
              <header className='flex justify-between'>
                <h1 className='text-3xl flex items-center tracking-tight font-bold text-green-500 dark:text-amber-300'>
                  <BookMarkedIcon size={'28'} color='blue' /> Book & Mark
                </h1>
                <Nav />
              </header>
              <main className='flex-1 h-screen border-1'>{children}</main>
              <footer className='mt-auto'>&#169; dordos SeniorCoding</footer>
            </div>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
