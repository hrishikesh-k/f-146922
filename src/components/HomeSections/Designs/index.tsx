'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { useFetchProjects } from '@/api/projects';
import Loader from '@/components/Shared/Loader';

export default function Designs() {
  const t = useTranslations();

  const { data, error, loading } = useFetchProjects('design');

  return (
    <div className="w-full-container text-textContrastColor bg-tertiary relative border-b-4 border-borderColor">
      <div className="font-secondary text-2xl md:text-4xl text-textColor md:pb-6 pb-3 md:px-5">
        {t('designProjects')}
      </div>
      {error && <div className="text-center p-10">{t('errorProjects')}</div>}
      {loading && <Loader />}
      <div className="flex flex-wrap">
        {data.map((project, index) => {
          const isOdd = index % 2 !== 0;
          return (
            <div
              className={`w-full md:mb-4 mb-8 md:flex flex-wrap ${isOdd && 'flex-row-reverse'}`}
              key={project.id}
            >
              <Image
                className="w-full min-w-80 mb-4 md:w-1/3 border-4 border-borderColor"
                src={project.image}
                alt={project.name}
                width="520"
                height="150"
              />
              <div className={`md:w-1/3 ${isOdd ? 'pr-4 text-right' : 'pl-4'}`}>
                <div className="text-textColor">{project.name}</div>
                <div className="text-textColor text-xs mt-2">{project.technology}</div>
                <div className="text-textColor text-sm mt-2">{project.description}</div>
                <div className={`${isOdd && 'justify-end'} flex `}>
                  {project.url && (
                    <Link target="_blank" href={project.url}>
                      <div
                        className="
                    self-end
                    text-textContrastColor 
                    hover:scale-105 
                    hover:opacity-70 
                    transition  
                    w-45 
                    text-center 
                    text-[10px]
                    mt-5 
                    p-2 
                    border-4
                    border-borderColor
                    bg-secondary"
                      >
                        {t('accessProject')}
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
