import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-left">
            <Link to="/" className="navbar-link" title="Home">
              <img src="/icons/home.png" alt="Home" className="navbar-icon" />
            </Link>
            <Link to="/skills" className="navbar-link" title="Skills">
              <img src="/icons/skills.png" alt="Skills" className="navbar-icon" />
            </Link>
            <Link to="/projects" className="navbar-link" title="Projects">
              <img src="/icons/projects.png" alt="Projects" className="navbar-icon" />
            </Link>
            <Link to="/education" className="navbar-link" title="Education">
              <img src="/icons/education.png" alt="Education" className="navbar-icon" />
            </Link>
            <Link to="/experience" className="navbar-link" title="Experience">
              <img src="/icons/experience.png" alt="Experience" className="navbar-icon" />
            </Link>
            <Link to="/contact" className="navbar-link" title="Contact">
              <img src="/icons/contact.png" alt="Contact" className="navbar-icon" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
