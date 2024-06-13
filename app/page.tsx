import About from "@/components/about";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <About/>

      <Footer/>
    </main>
  )
}
