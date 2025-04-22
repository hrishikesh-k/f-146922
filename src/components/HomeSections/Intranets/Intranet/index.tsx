import { type Project } from "@/models/projectModel";
import Image from "next/image";

export default function Intranet ({project}: {project: Project}) {
  return (
    <div className="p-1 md:p-4 box-border w-1/2 md:w-70">
      <div className="w-full h-full border-borderColor bg-primary border-4 cursor-pointer hover:scale-110 transition">
        <Image className="w-full" width='320' height='150' src={project.image} alt={project.name} />
        <div className="p-2 text-textColor flex content-center border-t-4 border-borderColor">
          <div className="text-[10px]">{project.name} - {project.technology}</div>
        </div>
      </div>
    </div>
  )
}