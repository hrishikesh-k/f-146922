import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { type ProjectModel } from '@/models/projectModel';

export default function Project({ project }: { project: ProjectModel }) {
  const t = useTranslations();
  return (
    <div className="p-2 w-80 md:w-90 md:p-4 box-border">
      <div className="w-full h-full border-borderColor bg-primary border-4">
        <div className="flex justify-between border-black border-b-4 content-center">
          <div className="p-2 flex gap-1">
            <div className="w-2 h-2 bg-quaternary border-quaternary border-1 rounded-full"></div>
            <div className="w-2 h-2 bg-quaternary border-quaternary border-1 rounded-full"></div>
            <div className="w-2 h-2 bg-quaternary border-quaternary border-1 rounded-full"></div>
          </div>
          <div className="text-textColor px-2 py-1 text-[10px]">{project.year}</div>
        </div>
        <Image className="w-full" width="320" height="150" src={project.image} alt={project.name} />
        <div className="p-4 text-textColor border-t-4 border-borderColor">
          <div className="overflow-auto h-30">
            <div className="text-sm pb-1 font-bold">{project.name}</div>
            <div className="text-[10px] pb-2 font-bold">{project.technology}</div>
            <div className="text-xs text-justify opacity-80 dark:opacity-95">
              {project.description}
            </div>
          </div>
          {project.url && (
            <Link aria-label="project" target="_blank" href={project.url}>
              <div
                className="
                text-textColor 
                hover:scale-105 
                hover:opacity-70 
                transition  
                w-45 
                text-center 
                text-[10px] 
                border-4 
                mt-5 
                p-2 
                bg-tertiary"
              >
                {t('accessProject')}
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
