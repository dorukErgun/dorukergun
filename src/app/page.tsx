import About from "@/sections/about";
import Experience from "@/sections/experiences";
import Projects from "@/sections/projects";


export default function Home() {
  return (
    <main className="text-subtext py-6 px-6 md:py-24 md:px-6">
      <About />
      <div className="pt-20"/>
      <Experience />
      <div className="pt-20"/>
      <Projects />
    </main>
  )
}
