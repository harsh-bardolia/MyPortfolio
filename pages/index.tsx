import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Education from "./components/Education";


export default function Home() {
  return (
    <>
      <Head>
        <title>Harsh Bardolia's Portfolio</title>
      </Head>
      <main className="text-white h-screen bg-[#171219] snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-[#f0803c] scrollbar-track-[#00337c]/10 z-0">
        {/* Header */}
        <Header />

        {/* Hero  */}
        <section key={0} id="hero" className="snap-start">
          <Hero />
        </section>

        {/* About */}
        <section key={1} id="about" className="snap-center">
          <About />
        </section>

        {/* Education */}
        <section key={2} id="education" className="snap-center">
          <Education />
        </section>

        {/* Experience */}
        <section key={3} id="experience" className="snap-center">
          <WorkExperience />
        </section>

        {/* Skills */}
        <section key={4} id="skills" className="snap-start">
          <Skills />
        </section>

        {/* Projects */}
        <section key={5} id="projects" className="snap-start">
          <Projects />
        </section>

        {/* Contact Me */}
        <section key={6} id="contactme" className="snap-start">
          <ContactMe />
        </section>
      </main>
    </>
  );
}
