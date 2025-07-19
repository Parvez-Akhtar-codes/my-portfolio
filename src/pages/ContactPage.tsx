import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default ContactPage
