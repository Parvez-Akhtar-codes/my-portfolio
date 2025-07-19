import './Education.css'

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Master of Computer Applications',
      institution: 'Rajasthan Technical University',
      year: '2023 - 2025',
      current: false
    },
    {
      id: 2,
      degree: 'Bachelor of Computer Applications',
      institution: 'Maharishi Dayanand Saraswati University, Ajmer',
      year: '2019 - 2022',
      current: false
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <div>
          <h2 className="section-title">
            Education
          </h2>

          <div className="education-grid">
            {education.map((edu) => (
              <div
                key={edu.id}
                className={`education-card ${edu.current ? 'current' : ''}`}
              >
                <div className="card-content">
                  <div className="card-left">
                    <div className="degree-row">
                      <h3 className="education-degree">{edu.degree}</h3>
                      <span className="education-year">{edu.year}</span>
                    </div>
                    <h4 className="education-institution">{edu.institution}</h4>
                  </div>
                  <div className="card-right">
                    {edu.current && <span className="current-badge">Current</span>}
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

export default Education
