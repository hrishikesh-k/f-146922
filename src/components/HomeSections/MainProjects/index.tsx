'use client';

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

const ProjectList = dynamic(() => import('./List/ProjectList'), { ssr: false });

export default function MainProjects() {
  const t = useTranslations();
  return (
    <div className="w-full-container text-textContrastColor bg-secondary  relative border-b-4 border-borderColor">
      <div className="font-secondary text-2xl md:text-4xl text-textContrastColor pb-2 md:px-5">
        {t('projects')}
      </div>
      <ProjectList />
    </div>
  );
}
