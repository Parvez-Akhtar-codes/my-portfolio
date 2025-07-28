import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react'
import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'parvezakhtar310@gmail.com',
      link: 'mailto:parvezakhtar310@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 7014807747',
      link: 'tel:+917014807747'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Jaipur, India',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/Parvez-Akhtar-codes'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/parvezakhtar02/'
    },
    {
      icon: <Twitter size={24} />,
      name: 'Twitter',
      url: 'https://x.com/parvez_codez'
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')
    
    try {
      const form = e.target as HTMLFormElement
      const formData = new FormData(form)
      const name = formData.get('name') as string
      const email = formData.get('email') as string
      const subject = formData.get('subject') as string
      const message = formData.get('message') as string
      
      // Create mailto link with form data
      const mailtoLink = `mailto:parvezakhtar310@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`
      
      // Open email client
      window.location.href = mailtoLink
      
      // Show success message
      setMessage('Email client opened! Please send the pre-filled message.')
      form.reset()
      
    } catch (error) {
      console.error('Error:', error)
      setMessage('Please contact me directly at parvezakhtar310@gmail.com')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div>
          <h2 className="section-title">
            Get In Touch
          </h2>
          
          <p className="contact-subtitle">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>

          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Talk</h3>
              <p>
                I'm always open to discussing new opportunities, creative projects, 
                and interesting challenges. Drop me a line!
              </p>

              <div className="contact-methods">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="contact-method"
                  >
                    <div className="contact-icon">{item.icon}</div>
                    <div className="contact-details">
                      <span className="contact-title">{item.title}</span>
                      <span className="contact-value">{item.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      {social.icon}
                      <span className="sr-only">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="form-input form-textarea"
                ></textarea>
              </div>

              {message && (
                <div className={`form-message ${message.includes('successfully') ? 'success' : 'error'}`}>
                  {message}
                </div>
              )}

              <button
                type="submit"
                className="submit-btn"
                disabled={isLoading}
              >
                <Send size={20} />
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
