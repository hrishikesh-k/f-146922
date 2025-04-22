"use client"

import { useFetchProjects } from "@/api/projects";
import { useTranslations } from "next-intl";
import Project from "./Project";
import Carousel from "../../Shared/Carousel";

export default function MainProjects () {
  const t = useTranslations();

  const {
    data,
    error,
  }= useFetchProjects();

  return (
    <div className="w-full-container text-textContrastColor bg-secondary  relative border-b-4 border-borderColor">
      <div className='font-secondary text-2xl md:text-4xl text-textContrastColor pb-2 md:px-5'>
        {t('projects')}
      </div>
      {error &&  
        <div className="text-center py-10">
          {t('errorProjects')}
        </div>
      }
      {!error && 
        <Carousel>
          {
            data.map(project => <Project project={project} key={project.id} />)
          }
        </Carousel>
      }
    </div>
  )
}