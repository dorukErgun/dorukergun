import About from "@/sections/about";
import Experience from "@/sections/experience";


export default function Home() {
  return (
    <main className="bg-secondary text-subtext p-12 md:p-24">
      <About />
      <div className="pt-20"/>
      <Experience />
    </main>
  )
}
