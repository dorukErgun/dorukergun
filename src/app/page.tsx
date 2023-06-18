import { EXPERIENCES } from "@/content/experience";
import About from "@/sections/about";
import Experience from "@/sections/experience";


export default function Home() {
  return (
    <main className="text-subtext py-6 px-6 md:py-24 md:px-6">
      <About />
      <div className="pt-20"/>
      <Experience />
    </main>
  )
}
