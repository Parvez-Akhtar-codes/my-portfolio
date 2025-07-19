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
              🏠
            </Link>
            <Link to="/skills" className="navbar-link" title="Skills">
              ⚡
            </Link>
            <Link to="/projects" className="navbar-link" title="Projects">
              💻
            </Link>
            <Link to="/education" className="navbar-link" title="Education">
              🎓
            </Link>
            <Link to="/experience" className="navbar-link" title="Experience">
              💼
            </Link>
            <Link to="/contact" className="navbar-link" title="Contact">
              📧
            </Link>
          </div>
          
          <div className="navbar-divider">|</div>
          
          <div className="navbar-right">
            <a href="/Parvez Akhtar resume.pdf" className="navbar-link" title="Resume" target="_blank">
              📄
            </a>
            <a href="https://github.com/Parvez-Akhtar-codes" className="navbar-link" title="GitHub" target="_blank">
              🔗
            </a>
            <a href="https://www.linkedin.com/in/parvezakhtar02/" className="navbar-link" title="LinkedIn" target="_blank">
              💼
            </a>
            <a href="https://x.com/parvezsure" className="navbar-link" title="Twitter" target="_blank">
              🐦
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
