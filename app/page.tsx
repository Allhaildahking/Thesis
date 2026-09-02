'use client';

import { useEffect, useState } from 'react';

const services = [
  {
    number: '01',
    name: 'Brand strategy',
    copy: 'Positioning, story, audience and the sharp idea that makes the brand make sense.',
  },
  {
    number: '02',
    name: 'Visual identity',
    copy: 'A visual system with enough character to be remembered and enough discipline to scale.',
  },
  {
    number: '03',
    name: 'Digital experience',
    copy: 'Websites and interfaces that turn attention into trust, then trust into action.',
  },
  {
    number: '04',
    name: 'Social presence',
    copy: 'An honest audit of how your brand shows up, speaks and gets understood online.',
  },
];

const work = [
  {
    name: 'SAGENIX',
    type: 'Strategy / Identity',
    line: 'Making expertise look as serious as it is.',
    mark: 'SG',
  },
  {
    name: 'KORA',
    type: 'Brand / Digital',
    line: 'Giving a good idea a sharper point of view.',
    mark: 'KO',
  },
];

export default function Home() {
  const [activeService, setActiveService] = useState(0);
  const [answer, setAnswer] = useState<boolean | null>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <main className="experience" style={{ '--mx': `${mouse.x}%`, '--my': `${mouse.y}%` } as React.CSSProperties}>
      <div className="grain" aria-hidden="true" />
      <div className="cursor-orb" aria-hidden="true" />

      <nav className="floating-nav">
        <a className="wordmark" href="#top" aria-label="Thesis home">THESIS<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#services">Capabilities</a>
          <a href="#start">Start</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow"><span>Independent branding agency</span><span>01 / 05</span></div>
        <div className="hero-copy">
          <p className="kicker">For startups with something to prove.</p>
          <h1>Make your<br /><em>brand</em><br />undeniable<span>.</span></h1>
          <p className="hero-note">Thesis builds strategic brands and digital experiences for ambitious startups ready to be taken seriously.</p>
        </div>
        <a className="scroll-cue" href="#question"><span>Scroll to challenge the brand</span><b>↓</b></a>
        <div className="hero-stamp" aria-hidden="true">T<br />H<br />/</div>
      </section>

      <section className="challenge" id="question">
        <div className="section-index">02 / THE QUESTION</div>
        <div className="challenge-content">
          <p className="kicker">Be honest.</p>
          <h2>Would a stranger<br />remember your brand<br />without the <em>logo?</em></h2>
          <div className="choice-row" role="group" aria-label="Brand recall question">
            <button className={answer === true ? 'choice selected' : 'choice'} onClick={() => setAnswer(true)}>Yes, easily <span>↗</span></button>
            <button className={answer === false ? 'choice selected' : 'choice'} onClick={() => setAnswer(false)}>Not really <span>↗</span></button>
          </div>
          {answer !== null && (
            <div className="answer" role="status">
              {answer ? 'Good. Now make sure the rest of the experience earns that memory.' : 'That is exactly the kind of problem Thesis exists to solve.'}
            </div>
          )}
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-index">03 / WHAT WE CHANGE</div>
        <div className="services-grid">
          <div>
            <p className="kicker">Not just pretty.</p>
            <h2>We make the<br /><em>idea</em> impossible<br />to miss.</h2>
          </div>
          <div className="service-list">
            {services.map((service, index) => (
              <button key={service.number} className={activeService === index ? 'service active' : 'service'} onMouseEnter={() => setActiveService(index)} onFocus={() => setActiveService(index)} onClick={() => setActiveService(index)}>
                <span>{service.number}</span>
                <strong>{service.name}</strong>
                <i>↗</i>
              </button>
            ))}
            <div className="service-detail" key={services[activeService].number}>
              <span>{services[activeService].number}</span>
              <p>{services[activeService].copy}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-index">04 / SELECTED WORK</div>
        <div className="work-heading">
          <p className="kicker">Proof, not promises.</p>
          <h2>Things we&apos;ve<br /><em>made matter.</em></h2>
        </div>
        <div className="work-grid">
          {work.map((project, index) => (
            <a className={`project project-${index + 1}`} href="#start" key={project.name}>
              <div className="project-art"><span>{project.mark}</span><small>THESIS / {String(index + 1).padStart(2, '0')}</small></div>
              <div className="project-meta"><div><strong>{project.name}</strong><span>{project.type}</span></div><b>↗</b></div>
              <p>{project.line}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-line">A brand is not a logo.</div>
        <div className="manifesto-line indent">It is the feeling people leave with.</div>
        <div className="manifesto-line">We build <em>that.</em></div>
      </section>

      <section className="start" id="start">
        <div className="section-index">05 / YOUR MOVE</div>
        <div className="start-inner">
          <p className="kicker">Have a good idea?</p>
          <h2>Give it a<br /><em>brand.</em></h2>
          <p>Tell us what you&apos;re building, where it&apos;s stuck and where you want it to go. No pitch deck required.</p>
          <div className="start-actions">
            <a className="big-action" href="mailto:hello.thesishq@gmail.com">Start a project <span>↗</span></a>
            <a className="text-action" href="https://wa.me/2349119135716">Or talk to us on WhatsApp</a>
          </div>
        </div>
      </section>

      <footer className="minimal-footer">
        <span>THESIS / 2026</span>
        <span>Built for the undeniable.</span>
        <span>Abuja · Nigeria</span>
      </footer>
    </main>
  );
}
