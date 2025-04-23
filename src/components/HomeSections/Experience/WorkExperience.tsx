'use client';

import { useTranslations } from 'next-intl';

import { useFetchExperiences } from '@/api/experiences';
import Loader from '@/components/Shared/Loader';

import ExperienceItem from './ExperienceItem';

export default function WorkExperience() {
  const t = useTranslations();

  const { data, error, loading } = useFetchExperiences();

  return (
    <div className="md:w-1/2 md:pr-8">
      <div className="font-secondary text-2xl md:text-4xl text-textContrastColor pb-5 md:px-5">
        {t('experience')}
      </div>
      {error && <div className="text-center p-10">{t('errorSkills')}</div>}
      {loading && <Loader invert />}
      <div className="px-5 border-tertiary border-l-4">
        {data?.map((experience) => (
          <ExperienceItem
            key={experience.id}
            startDate={experience.startDate}
            endDate={experience.endDate}
            title={`${experience.company} | (${experience.location}) | ${experience.title}`}
          >
            {experience.responsibilities.map((responsibility, index) => (
              <li className="mb-1" key={index}>
                {responsibility}
              </li>
            ))}
          </ExperienceItem>
        ))}
      </div>
    </div>
  );
}
