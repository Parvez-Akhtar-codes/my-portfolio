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
              href="https://twitter.com/your-twitter-handle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Parvez
            </a>
            <Heart className="heart-icon" size={16} />
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
