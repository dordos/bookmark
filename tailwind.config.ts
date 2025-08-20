// 파일 이름: tailwind.config.ts

import type { Config } from 'tailwindcss';

const config: Config = {
  // content 배열에 Tailwind 클래스를 사용하는 모든 파일의 경로를 알려줘야 합니다.
  content: [
    // Next.js (App Router)의 일반적인 경로 예시
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
