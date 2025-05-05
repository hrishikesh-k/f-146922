import { useTranslations } from 'next-intl';

import { useFetchEducations } from '@/api/educations';
import Loader from '@/components/Shared/Loader';

import ExperienceItem from './ExperienceItem';

export default function Education() {
  const t = useTranslations();

  const { data, error, loading } = useFetchEducations();

  return (
    <div className="md:w-1/2 md:pl-10 md:mt-0 mt-12">
      <div className="font-secondary text-2xl md:text-4xl text-textContrastColor pb-5 md:px-5">
        {t('education')}
      </div>
      {error && <div className="text-center p-10">{t('errorSkills')}</div>}
      {loading && <Loader />}
      {!loading && (
        <>
          <div className="px-5 border-tertiary border-l-4 mb-12">
            {data?.educations?.map((education) => (
              <ExperienceItem
                key={education.id}
                startDate={education.startDate}
                endDate={education.endDate}
                title={education.institution}
              >
                {education.degree}
              </ExperienceItem>
            ))}
          </div>

          <div className="font-secondary text-2xl md:text-4xl text-textContrastColor pb-5 md:px-5">
            {t('certifications')}
          </div>
          <div className="px-5 border-tertiary border-l-4">
            {data?.certifications?.map((certification) => (
              <ExperienceItem
                key={certification.id}
                startDate={certification.year}
                title={certification.provider}
              >
                {certification.course}
              </ExperienceItem>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
