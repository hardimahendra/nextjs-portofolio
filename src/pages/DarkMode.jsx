'use client';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <>
      <span value={theme} onChange={(e) => setTheme(e.target.value)}>
        <i>{currentTheme === 
        'dark' 
        ? <BsFillSunFill value="light" className="light" onClick={() => setTheme('light')} /> 
        : <BsFillMoonFill value="dark" className="dark" onClick={() => setTheme('dark')} />}</i>
      </span>
    </>
  );
};
export default DarkMode;
