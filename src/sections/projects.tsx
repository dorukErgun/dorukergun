import { PROJECTS } from "@/content/projects";
import Image from 'next/image'
import Link from "next/link";

export default function Projects() {

  return (
    <section className="flex flex-col">
      <h3 className="font-thin text-xl text-maintext">
        Projects
      </h3>
      <div className="pt-5 flex flex-col gap-5">
        {PROJECTS.map((project, index) => {
          return (
            <Link 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="md:-ml-5" 
            >
              <div key={index.toString()} className="w-full flex md:hover:bg-black/30 md:p-5 transition-all rounded-md md:hover:shadow-xl">
                <div className="w-[100px] md:w-[200px] pr-5  relative">
                    <Image 
                      src={project.image} 
                      alt={project.name} 
                      width={200}
                      height={1}
                      className="rounded-xl z-10 aspect-video object-contain"
                    />
                </div>
                <div className="flex flex-1 flex-col gap-y-2">
                  <span className="text-white">
                    {project.name}
                  </span>
                  {project.description}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}