import { Heart } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            Developed by{' '}
            <a 
              href="https://x.com/parvez_codez" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Parvez
            </a>
           
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
