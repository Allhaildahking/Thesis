'use client';

import Image from 'next/image';
import { FormEvent, useState } from 'react';
import thesisLogo from './Thesis Logo.png';
import thesisWordmark from './Thesis wordmark.png';

const services = [
  { n: '01', title: 'Brand strategy', text: 'Positioning, messaging and the central idea that gives your business a clear reason to be remembered.' },
  { n: '02', title: 'Visual identity', text: 'A distinctive visual system built to make the brand recognizable wherever it appears.' },
  { n: '03', title: 'Digital experience', text: 'Websites and digital touchpoints that make the brand feel as good as the idea behind it.' },
  { n: '04', title: 'Social presence', text: 'A practical system for showing up consistently, clearly and confidently online.' },
];

const projectData = [
  { name: 'SAGENIX', type: 'Strategy / Identity', description: 'A sharper identity for a business built around expertise.', tone: 'dark' },
  { name: 'KORA', type: 'Brand / Digital', description: 'Turning a good idea into a brand with a point of view.', tone: 'light' },
];

export default function Home() {
  const [activeService, setActiveService] = useState(0);
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `New Thesis project — ${form.get('company') || 'New enquiry'}`;
    const body = [
      `Name: ${form.get('name') || ''}`,
      `Email: ${form.get('email') || ''}`,
      `Company: ${form.get('company') || ''}`,
      `Project type: ${form.get('project') || ''}`,
      '',
      'Project details:',
      form.get('details') || '',
    ].join('\n');
    window.location.href = `mailto:hello.thesishq@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <main className="site-shell">
      <header className="site-header">
        <a href="#top" className="header-brand" aria-label="Thesis home">
          <Image src={thesisWordmark} alt="Thesis" priority sizes="150px" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a className="header-cta" href="#contact">Start a project <span>↗</span></a>
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-topline"><span>Independent branding studio</span><span>Abuja / Nigeria</span></div>
        <div className="hero-layout">
          <div className="hero-main">
            <p className="eyebrow">For startups with something to prove.</p>
            <h1>Make your<br /><span>brand</span><br />undeniable.</h1>
            <p className="hero-description">We build strategic brands, identities and digital experiences for ambitious businesses ready to be taken seriously.</p>
            <a className="hero-link" href="#work">Explore selected work <span>↓</span></a>
          </div>
          <div className="hero-mark" aria-hidden="true">
            <Image src={thesisLogo} alt="" sizes="clamp(150px, 22vw, 330px)" />
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="section-label">01 / THE IDEA</div>
        <div className="intro-copy">
          <h2>Your product can be good.<br /><i>Your brand should make people believe it.</i></h2>
          <div className="intro-bottom"><p>Thesis helps startups turn what they are building into something people can recognize, remember and choose.</p><a href="#services">What we do ↗</a></div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-label"><span>02 / SELECTED WORK</span><span>02 projects</span></div>
        <div className="section-heading"><p>Proof, not promises.</p><h2>Work that gives<br /><i>ideas a shape.</i></h2></div>
        <div className="projects">
          {projectData.map((project, index) => (
            <article className={`project-card ${project.tone}`} key={project.name}>
              <div className="project-visual">
                <span className="project-number">0{index + 1}</span>
                <Image className="project-logo" src={thesisLogo} alt="" sizes="100px" />
                <strong>{project.name}</strong>
                <span className="project-note">THESIS / CASE STUDY</span>
              </div>
              <div className="project-info"><div><h3>{project.name}</h3><p>{project.type}</p></div><span>↗</span></div>
              <p className="project-description">{project.description}</p>
            </article>
          ))}
        </div>
        <p className="portfolio-note">Our case studies are being expanded with the full identity systems and project details.</p>
      </section>

      <section className="belief-section" id="about">
        <div className="section-label">03 / OUR BELIEF</div>
        <div className="belief-layout"><div className="belief-statement">A logo gets attention.<br /><i>A brand gives people<br />a reason to care.</i></div><div className="belief-copy"><p>Most startups do not have a design problem. They have a clarity problem.</p><p>We find the idea underneath the business, sharpen it, then build the identity and experience around it.</p><span>That is the thesis.</span></div></div>
      </section>

      <section className="services-section" id="services">
        <div className="section-label">04 / WHAT WE DO</div>
        <div className="services-layout">
          <div className="services-heading"><p>One partner.<br />From idea to presence.</p><h2>Build it.<br /><i>Make it matter.</i></h2></div>
          <div className="service-list">
            {services.map((service, index) => (
              <button className={`service-row ${activeService === index ? 'active' : ''}`} key={service.n} onMouseEnter={() => setActiveService(index)} onFocus={() => setActiveService(index)} onClick={() => setActiveService(index)}>
                <span>{service.n}</span><strong>{service.title}</strong><b>↗</b>
                {activeService === index && <em>{service.text}</em>}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="diagnostic-section">
        <div className="diagnostic-box">
          <span className="section-label">05 / THE TEST</span>
          <p>Be honest.</p>
          <h2>Would a stranger remember your brand if the <i>logo disappeared?</i></h2>
          <div className="diagnostic-actions"><a href="#contact">Yes. Easily. <span>↗</span></a><a href="#contact">Not really. <span>↗</span></a></div>
        </div>
      </section>

      <section className="audience-section">
        <div className="section-label">06 / WHO WE WORK WITH</div>
        <div className="audience-layout"><h2>For founders<br />with something<br /><i>worth building.</i></h2><div><p>Startups. New ventures. Product launches. Rebrands. Companies entering their next chapter.</p><p className="not-for">We are not the studio you call when you need “just a logo by Friday.”</p></div></div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-label">07 / START A PROJECT</div>
        <div className="contact-layout">
          <div className="contact-heading"><p>Have something worth building?</p><h2>Give it a<br /><i>brand.</i></h2><a href="https://wa.me/2349119135716">Prefer WhatsApp? Talk to us ↗</a></div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Name<input name="name" required placeholder="Your name" /></label>
            <label>Email<input name="email" type="email" required placeholder="you@company.com" /></label>
            <label>Company<input name="company" placeholder="Company / startup name" /></label>
            <label>What do you need?<select name="project" defaultValue=""><option value="" disabled>Select one</option><option>Brand strategy</option><option>Visual identity</option><option>Website / digital</option><option>Social presence</option><option>Full brand</option></select></label>
            <label>Tell us about it<textarea name="details" required placeholder="What are you building, where are you now, and where do you want to go?" /></label>
            <button type="submit">Start the conversation <span>↗</span></button>
            {sent && <small className="form-note">Your email app should open with the project details ready to send.</small>}
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div><Image src={thesisWordmark} alt="Thesis" sizes="120px" /><p>Branding for ambitious startups.</p></div>
        <div className="footer-links"><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        <div className="footer-meta"><a href="https://instagram.com/thesishq">Instagram ↗</a><a href="https://x.com/thesis_hq">X ↗</a><span>Abuja / Nigeria</span><span>© 2026 Thesis HQ</span></div>
      </footer>
    </main>
  );
}
