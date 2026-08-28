import Header from './sections/Header'
import Hero from './sections/Hero'
import Intro from './sections/Intro'
import Advantages from './sections/Advantages'
import Installation from './sections/Installation'
import Usage from './sections/Usage'
import ComponentShowcase from './sections/ComponentShowcase'
import ProjectsAndTemplates from './sections/ProjectsAndTemplates'
import Faq from './sections/Faq'
import StartNow from './sections/StartNow'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Advantages />
        <Installation />
        <Usage />
        <ComponentShowcase />
        <ProjectsAndTemplates />
        <Faq />
        <StartNow />
      </main>
      <Footer />
    </>
  )
}

export default App
