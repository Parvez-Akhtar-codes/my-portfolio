import './Skills.css'

const Skills = () => {
  const skills = [
    { name: 'Java', icon: '☕', color: '#f89820' },
    { name: 'Spring Boot', icon: '🍃', color: '#6db33f' },
    { name: 'React', icon: '⚛️', color: '#61dafb' },
    { name: 'TypeScript', icon: '📘', color: '#3178c6' },
    { name: 'JavaScript', icon: '🟨', color: '#f7df1e' },
    { name: 'MySQL', icon: '🗄️', color: '#4479a1' },
    { name: 'Git', icon: '🔗', color: '#f05032' },
    { name: 'Docker', icon: '🐳', color: '#2496ed' },
    { name: 'AWS', icon: '☁️', color: '#ff9900' },
    { name: 'HTML5', icon: '🌐', color: '#e34f26' },
    { name: 'CSS3', icon: '🎨', color: '#1572b6' },
    { name: 'REST APIs', icon: '🔌', color: '#25d366' },
    { name: 'Hibernate', icon: '🔄', color: '#59666c' },
    { name: 'Maven', icon: '📦', color: '#c71a36' },
    { name: 'VS Code', icon: '💻', color: '#007acc' }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-content">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="skill-card"
                style={{ '--skill-color': skill.color, '--delay': `${index * 0.1}s` }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
