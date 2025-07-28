import { Github, Linkedin, Mail, Twitter, FileText } from 'lucide-react';
import React from 'react'; // Import React for FC type
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-profile">
          <img
            src="/profile.jpg"
            alt="Parvez Akhtar's Profile"
            className="profile-image"
            onError={(e) => {
              e.currentTarget.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'><circle cx='75' cy='75' r='75' fill='%233b82f6'/><text x='75' y='90' font-family='Arial' font-size='60' font-weight='bold' fill='white' text-anchor='middle'>PA</text></svg>";
            }}
          />
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="hero-name">Parvez Akhtar</span>
        </h1>

        <p className="hero-description">
          My main export is turning caffeine and half-baked ideas into functional code. I have a knack for finding creative ways to break things, which, conveniently, has made me pretty good at learning how to fix them quickly. My brain is mostly furnished with stubborn bugs, the logic of a good game, and a deep-seated need to solve puzzles—all formally certified with an MCA degree.
        </p>

        <p className="hero-cta">
          If you're building something that doesn't bore you to tears, let's chat.
        </p>

        <div className="hero-actions">
          <a href="mailto:parvezakhtar310@gmail.com" className="btn btn-primary">
            <Mail size={18} />
            Get in touch
          </a>
          <a href="/Parvez Akhtar resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <FileText size={18} />
            View Resume
          </a>
        </div>

        <div className="hero-social">
          {/* ⬇️ IMPORTANT: Replace these with your actual profile links! ⬇️ */}
          <a
            href="https://github.com/Parvez-Akhtar-codes"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/parvezakhtar02/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://x.com/parvez_codez"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href="mailto:parvezakhtar310@gmail.com"
            className="social-link"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;