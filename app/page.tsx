import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import RevealObserver from '@/components/RevealObserver'

export default function Home() {
  return (
    <>
      <Nav />
      <RevealObserver />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Blog />
        <Contact />
      </main>
    </>
  )
}
