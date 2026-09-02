const services = [
  ["01", "Brand Strategy", "Positioning, messaging and a clear point of view."],
  ["02", "Visual Identity", "Logos, systems and visual language built to be remembered."],
  ["03", "Web Design + Development", "Digital experiences that make the brand feel as good as it looks."],
  ["04", "Social Presence Audit", "A sharp look at how your brand shows up — and what needs to change."],
];

export default function Home() {
  return (
    <main className="site">
      <nav className="nav">
        <a className="logo" href="#top" aria-label="Thesis home">THESIS</a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow">Branding agency / For ambitious startups</div>
        <h1>Make your brand <span>undeniable.</span></h1>
        <div className="hero-bottom">
          <p className="hero-copy">Thesis helps ambitious startups turn good ideas into brands people notice, remember and trust.</p>
          <a className="cta" href="https://wa.me/2349119135716" target="_blank" rel="noreferrer">Start a conversation <span>↗</span></a>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Strategy</span><span>Identity</span><span>Digital</span><span>Presence</span><span>Strategy</span><span>Identity</span><span>Digital</span><span>Presence</span>
        </div>
      </div>

      <section className="section" id="services">
        <div className="section-head">
          <span className="section-number">01 / What we do</span>
          <h2 className="section-title">The thinking behind the thing.</h2>
        </div>
        <div className="services">
          {services.map(([number, title, description]) => (
            <div className="service" key={number}>
              <span className="service-num">{number}</span>
              <h3>{title}</h3>
              <span className="service-desc">{description}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-head">
          <span className="section-number">02 / Selected work</span>
          <h2 className="section-title">Small portfolio. Serious intent.</h2>
        </div>
        <div className="work-grid">
          <article className="project">
            <div className="project-art"><div className="sagenix-mark">SAGENIX</div></div>
            <div className="project-meta">
              <div><div className="project-name">SAGENIX</div><div className="project-type">Brand strategy / Identity</div></div>
              <span className="project-type">01</span>
            </div>
          </article>
          <article className="project small">
            <div className="project-art"><div className="kora-mark">Kora</div></div>
            <div className="project-meta">
              <div><div className="project-name">Kora</div><div className="project-type">Brand / Digital</div></div>
              <span className="project-type">02</span>
            </div>
          </article>
        </div>
      </section>

      <section className="statement" id="approach">
        <div className="section">
          <p>Most startups don't need <em>more noise.</em> They need a brand with a point of view.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="section-number">03 / The Thesis</span>
          <h2 className="section-title">Good branding isn't decoration. It's leverage.</h2>
        </div>
        <p className="hero-copy">We start with the uncomfortable questions: Who are you? Why should anyone care? What should people feel when they meet you? Then we build the strategy, identity and digital presence to make those answers impossible to miss.</p>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-top">
          <h2>Ready to become <span>undeniable?</span></h2>
          <div className="footer-contact">
            <a href="mailto:hello.thesishq@gmail.com">hello.thesishq@gmail.com ↗</a>
            <a href="https://wa.me/2349119135716" target="_blank" rel="noreferrer">WhatsApp ↗</a>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 Thesis HQ</span><span>Built for brands with something to say.</span></div>
      </footer>
    </main>
  );
}
