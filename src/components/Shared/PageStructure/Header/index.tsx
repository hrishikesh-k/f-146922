import Link from 'next/link';

import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';
import ThemeSelector from './ThemeSelector';

export default function Header() {
  return (
    <div className="border-b-4 text-textColor z-9999 text-2xl bg-primary border-borderColor sticky px-6 pb-2 pt-3 top-0 left-0 flex justify-between w-full content-center">
      <Link aria-label="lucas mendonca" className="font-secondary " href="/">
        Lucas Mendonça
      </Link>
      <div className="hidden content-center flex-wrap gap-4 md:flex">
        <ThemeSelector />
        <LanguageSwitcher />
      </div>
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </div>
  );
}
