import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend',
      skills: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'REST APIs']
    },
    {
      title: 'Frontend', 
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Tools',
      skills: ['Git', 'Docker', 'AWS', 'Maven', 'VS Code']
    }
  ]

  return (
    <section id="skills" className="about">
      <div className="container">
        <div className="about-content">
          <h2 className="section-title">Skills</h2>
          
          <div className="skills-categories">
            {skillCategories.map((category) => (
              <div key={category.title} className="skill-category">
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-row">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
