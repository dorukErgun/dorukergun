import { EXPERIENCES } from "@/content/experience";
import About from "@/sections/about";
import Experience from "@/sections/experience";


export default function Home() {
  return (
    <main className="text-subtext py-6 px-6 md:py-24 md:px-6">
      <About />
      <div className="pt-20"/>
      <section className="flex flex-col">
      <h3 className="font-thin text-xl text-maintext">
        Experiences
      </h3>
      <div className="flex flex-col gap-10">
        {EXPERIENCES.map((experience, index) => {
          return (
            <div key={index.toString()} className="w-full flex">
              <div className="w-[100px] md:w-[200px]">
                {experience.startDate} - {experience.endDate}
              </div>
              <div className="flex flex-1 flex-col gap-y-2">
                <div className="font-semibold text-lg">
                  {experience.position} <span className="text-primary">@{experience.company}</span> 
                </div>
                <div>
                  {experience.description}
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {experience.technologyTags.map((technology, index) => {
                    return (
                      <span key={index.toString()} className="border-[#3bb6d5] border hover:scale-105 hover:cursor-default transition-all text-white px-3 py-1 rounded-xl">
                        {technology}
                      </span>
                    )

                  })}
                  
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </section>
    </main>
  )
}
