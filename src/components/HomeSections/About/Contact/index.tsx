import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import './Contact.scss';

export default function Contact() {
  const t = useTranslations();
  return (
    <div className="bg-secondary text-textContrastColor fade-in-long contact-container">
      <div className="w-full overflow-hidden p-4">
        <Image
          className="w-full"
          width="200"
          height="200"
          src="/images/lucas.webp"
          alt="lucas mendonca"
        />
      </div>
      <div className="px-10 py-8 pt-2">
        <div className="text-4xl">
          <div className="font-secondary">{t('contact')}</div>

          <div className="text-[10px] md:text-xs pt-3 flex gap-2">
            <Image
              className="invert"
              width="15"
              height="15"
              src="/images/icon-email.png"
              alt="email icon"
            />
            <a href="mailto:lucasmendoncawf@gmail.com">lucasmendoncawf@gmail.com</a>
          </div>
          <div className="text-xs pt-3 flex gap-2">
            <Image
              className="invert"
              width="15"
              height="15"
              src="/images/icon-phone.png"
              alt="phone icon"
            />
            +55 (11) 94151-7072
          </div>
          <div className="text-xs pt-3 flex gap-2">
            <Image
              className="invert"
              width="15"
              height="15"
              src="/images/icon-location.png"
              alt="location icon"
            />
            {t('location')}
          </div>
          <div className="flex gap-3 pt-5">
            <Link
              aria-label="github"
              className="transition hover:opacity-60 hover:scale-120"
              target="_blank"
              href="https://github.com/LucasMendoncaWF"
            >
              <Image src="/images/social-github.png" alt="github-icon" width="32" height="32" />
            </Link>
            <Link
              aria-label="linkedin"
              className="transition hover:opacity-60 hover:scale-120"
              target="_blank"
              href="https://www.linkedin.com/in/lucasmendoncap/"
            >
              <Image src="/images/social-linkedin.png" alt="github-icon" width="32" height="32" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
