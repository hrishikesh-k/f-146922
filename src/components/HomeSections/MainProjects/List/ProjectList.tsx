'use client';

import { useTranslations } from 'next-intl';

import { useFetchProjects } from '@/api/projects';
import Carousel from '@/components/Shared/Carousel';

import Project from '../Project';

export default function ProjectList() {
  const t = useTranslations();
  const { data, error } = useFetchProjects();

  return (
    <>
      {error && <div className="text-center py-10">{t('errorProjects')}</div>}
      {!error && (
        <Carousel>
          {data.map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </Carousel>
      )}
    </>
  );
}
