"use client"
import { EXPERIENCES } from "@/content/experience";

export default function Experience() {

  return (
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
                  {experience.position} @ <span className="text-primary text-2xl">{experience.company}</span> 
                </div>
                <div>
                  {experience.description}
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </section>
  )
}