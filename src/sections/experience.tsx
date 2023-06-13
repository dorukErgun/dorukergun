import { EXPERIENCES } from "@/content/experience";

export default function Experience() {

  return (
    <section className="w-full">
      <div className="pt-5 w-full">
        {EXPERIENCES.map((experience, index) => (
          <div key={index.toString()} className="pb-5 w-full flex">
            <div className="w-1/3">
              {experience.startDate} - {experience.endDate}
            </div>
            <div className="w-2/3">
              <div className="pl-10">
              {experience.position} @ {experience.company}

              </div>
            </div>
          </div>
        ))
        }
      </div>
    </section>
  )
}