import './About.css'

const Skills = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java',
    'HTML5', 'CSS3', 'MongoDB', 'MySQL', 'Git', 'VS Code',
    'Express.js', 'REST APIs', 'Responsive Design', 'Static Design',
    'Next.js', 'Tailwind CSS', 'Bootstrap', 'jQuery', 'Firebase'
  ]

  return (
    <section id="skills" className="about">
      <div className="container">
        <div className="about-content">
          <h2 className="section-title">
            Skills
          </h2>
          
          <div className="skills-grid">
            {skills.map((skill) => (
              <div
                key={skill}
                className="skill-tag"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
