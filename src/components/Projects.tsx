import { ExternalLink, Github, Eye } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Spring Boot E-Commerce API',
      description: '🚧 Work in Progress - A robust RESTful e-commerce backend built with Spring Boot, featuring JWT authentication, payment integration, and comprehensive admin panel. Implementing clean architecture with proper validation and error handling.',
      technologies: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'JWT', 'Maven'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Parvez-Akhtar-codes/spring-ecommerce-api',
      featured: true,
      status: 'In Development'
    },
    {
      id: 2,
      title: 'Microservices Banking System',
      description: '🚧 Coming Soon - A distributed banking application using microservices architecture with Spring Cloud, featuring account management, transaction processing, and real-time notifications.',
      technologies: ['Java', 'Spring Cloud', 'Docker', 'PostgreSQL', 'RabbitMQ', 'Eureka'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Parvez-Akhtar-codes/banking-microservices',
      featured: true,
      status: 'Planning Phase'
    },
    {
      id: 3,
      title: 'Library Management System',
      description: '🚧 In Development - A comprehensive library management system with book cataloging, member management, and automated fine calculation using Java Swing and MySQL.',
      technologies: ['Java', 'Swing', 'MySQL', 'JDBC', 'Maven'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Parvez-Akhtar-codes/library-management',
      featured: false,
      status: 'In Development'
    },
    {
      id: 4,
      title: 'Real-time Chat Application',
      description: '🚧 Coming Soon - A multi-threaded chat application using Java sockets with group chat functionality, file sharing, and user authentication.',
      technologies: ['Java', 'Socket Programming', 'Multithreading', 'JavaFX', 'MySQL'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Parvez-Akhtar-codes/java-chat-app',
      featured: false,
      status: 'Planning Phase'
    },
    {
      id: 5,
      title: 'Student Management Portal',
      description: '🚧 Work in Progress - A web-based student management system with Spring MVC, featuring attendance tracking, grade management, and parent-teacher communication.',
      technologies: ['Java', 'Spring MVC', 'Hibernate', 'MySQL', 'Bootstrap', 'Thymeleaf'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Parvez-Akhtar-codes/student-portal',
      featured: false,
      status: 'In Development'
    },
    {
      id: 6,
      title: 'RESTful Blog API',
      description: '🚧 Coming Soon - A comprehensive blog API with CRUD operations, user roles, comment system, and image upload functionality built with Spring Boot.',
      technologies: ['Java', 'Spring Boot', 'JPA', 'PostgreSQL', 'JWT', 'Swagger'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Parvez-Akhtar-codes/blog-api',
      featured: false,
      status: 'Planning Phase'
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div>
          <h2 className="section-title">
            Featured Projects
          </h2>
          
          <p className="section-subtitle">
            A showcase of my recent work and creative solutions
          </p>

          {/* Featured Projects */}
          <div className="featured-projects">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="featured-project-card"
              >
                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <div className="project-links">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        <Github size={20} />
                      </a>
                      {project.liveUrl !== '#' ? (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                          <ExternalLink size={20} />
                        </a>
                      ) : (
                        <span className="project-link disabled">
                          <Eye size={20} />
                        </span>
                      )}
                    </div>
                  </div>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-actions">
                    {project.liveUrl === '#' ? (
                      <span className="btn btn-disabled">
                        <Eye size={16} />
                        {project.status || 'Coming Soon'}
                      </span>
                    ) : (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                      <Github size={16} />
                      {project.githubUrl.includes('github.com') ? 'View Code' : 'Repo Coming Soon'}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <h3 className="other-projects-title">
            Other Projects
          </h3>
          
          <div className="other-projects">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="project-card"
              >
                <div className="card-header">
                  <h4>{project.title}</h4>
                  <div className="card-links">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </a>
                    {project.liveUrl !== '#' ? (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={20} />
                      </a>
                    ) : (
                      <span style={{color: '#94a3b8', cursor: 'not-allowed'}}>
                        <Eye size={20} />
                      </span>
                    )}
                  </div>
                </div>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Contributions Calendar */}
          <div className="github-calendar-section">
            <h3 className="github-calendar-title">
              GitHub Contributions
            </h3>
            
            <div className="github-calendar-container">
              <img 
                src="https://ghchart.rshah.org/22c55e/Parvez-Akhtar-codes" 
                alt="Parvez Akhtar's GitHub Contributions Calendar"
                className="github-calendar"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
