import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Freelancer',
      company: 'Self-Employed',
      duration: 'Jun 2025 - Present',
      current: false
    },
    {
      id: 2,
      position: 'Web Development Trainee',
      company: 'SBCET, Jaipur',
      duration: 'Jan 2025 - May 2025',
      current: false
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div>
          <h2 className="section-title">
            Experience
          </h2>

          <div className="experience-grid">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className={`experience-card ${exp.current ? 'current' : ''}`}
              >
                <div className="card-content">
                  <div className="card-left">
                    <div className="position-row">
                      <h3 className="experience-position">{exp.position}</h3>
                      <span className="experience-duration">{exp.duration}</span>
                    </div>
                    <h4 className="experience-company">{exp.company}</h4>
                  </div>
                  <div className="card-right">
                    {exp.current && <span className="current-badge">Current</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
