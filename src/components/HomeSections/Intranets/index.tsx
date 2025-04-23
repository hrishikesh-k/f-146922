'use client';

import { useTranslations } from 'next-intl';

import { useFetchProjects } from '@/api/projects';
import Loader from '@/components/Shared/Loader';

import Intranet from './Intranet';

export default function Intranets() {
  const t = useTranslations();

  const { data, error, loading } = useFetchProjects('intranet');

  return (
    <div className="w-full-container text-textContrastColor bg-tertiary relative border-b-4 border-borderColor">
      <div className="font-secondary text-2xl md:text-4xl text-textColor pb-5 md:px-5">
        {t('intranets')}
      </div>
      {error && <div className="text-center p-10">{t('errorProjects')}</div>}
      {loading && <Loader />}
      <div className="flex justify-start flex-wrap">
        {data.map((project) => (
          <Intranet project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}
