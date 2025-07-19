import Projects from '../components/Projects'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ProjectsPage = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default ProjectsPage
