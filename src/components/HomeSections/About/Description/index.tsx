import { useTranslations } from "next-intl";
import Image from "next/image";
import TechTag from "./TechTag";
import Link from "next/link";

export default function Description () {
  const t = useTranslations();
  return (
    <div className="text-textColor">
      <div className='font-secondary text-xl md:text-4xl'>
        {t('hello')} {t('name')}
      </div>
      <div className="md:pt-4 text-xs/6 whitespace-pre-line tracking-wider text-justify">
        {t('description')}
      </div>
      <div className="flex gap-2 pt-1 flex-wrap">
        {['React', 'Next.js', 'Angular', 'TypeScript', 'Scss'].map((tagName, index) => <TechTag hasAnimation index={index} key={index}>{tagName}</TechTag>)}
      </div>
      <div className="pt-10 font-secondary text-xl md:text-4xl">{t('softSkills')}</div>
      <div className="md:pt-4 text-xs/6 whitespace-pre-line tracking-wider text-justify">
        {t('softSkillsDescription')}
      </div>
      <div className="mt-6 mb-8 md:mb-0">
      <Link target="_blank" href='https://drive.google.com/file/d/1JrK3329h7odu9VJc7GdxIxsIrXxFskmY' >
        <div className="
          text-textContrastColor 
          hover:scale-105 
          hover:opacity-70 
          transition
          border-borderColor
          border-4
          px-3
          py-2
          w-80
          flex
          content-center
          justify-center
          bg-secondary"
          >
            
            <span className="pr-2"><Image width="20" height="20" src="/images/download.png" alt="download icon" /></span>
            <span>{t('downloadCV')}</span>
          </div>
      </Link>
      </div>
    </div>
  )
}