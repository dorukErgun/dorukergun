import { EXPERIENCES } from "@/content/experience";

export default function Experiences() {

  return (
    <section className="flex flex-col">
      <h3 className="font-thin text-xl text-maintext">
        Experiences
      </h3>
      <div className="pt-5 flex flex-col gap-10">
        {EXPERIENCES.map((experience, index) => {
          return (
            <div key={index.toString()} className="w-full flex">
              <div className="w-[100px] md:w-[200px]">
                {experience.startDate} - {experience.endDate}
              </div>
              <div className="flex flex-1 flex-col gap-y-2">
                <div className="text-white text-lg">
                  {experience.position} <span className="text-primary">@{experience.company}</span> 
                </div>
                <div>
                  {experience.description}
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {experience.technologyTags.map((technology, index) => {
                    return (
                      <span key={index.toString()} className="border-[#3bb6d5]/80 border hover:scale-105 hover:cursor-default transition-all text-white px-3 py-1 rounded-xl">
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
  )
}