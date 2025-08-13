'use client';

import { MonitorIcon, MoonStar, MoonStarIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { keyof } from 'zod';

const THEMES = ['light', 'system', 'dark'];
const THEME_ICON = {
  light: <MonitorIcon />,
  system: <MoonStarIcon />,
  dark: <SunIcon />,
};

function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);

  const changeTheme = () => {
    let nextThemeIdx = THEMES.indexOf(theme as keyof typeof THEME_ICON) + 1;
    if (nextThemeIdx === THEMES.length) nextThemeIdx = 0;
    setTheme(THEMES[nextThemeIdx]);
    return THEME_ICON;
  };

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return <button className='w-6'></button>;
  }
  return (
    <>
      <button onClick={changeTheme} className='btn-icon'>
        {THEME_ICON[theme as keyof typeof THEME_ICON]}
      </button>
    </>
  );
}

export default ThemeChanger;
