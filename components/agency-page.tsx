"use client";

import { FormEvent, MouseEvent, useEffect, useState } from "react";

const projects = [
  { no: "01", name: "NOMA", category: "Brand strategy / Identity", year: "2026", description: "A new operating system for a technology company built around calm, considered decisions.", kind: "noma" },
  { no: "02", name: "ARC", category: "Strategy / Digital", year: "2026", description: "Giving a complex financial product a more legible way into the world.", kind: "arc" },
  { no: "03", name: "KOVA", category: "Identity / Presence", year: "2026", description: "A cultural identity that makes room for curiosity, not clutter.", kind: "kova" },
];

const services = [
  ["01", "Strategy", "Positioning, architecture, messaging, and creative direction. The decisions that make every other decision easier."],
  ["02", "Identity", "Names, logo systems, visual language, and guidelines that create instant recognition without the noise."],
  ["03", "Digital", "Websites and digital experiences built to carry the idea forward, not simply decorate it."],
  ["04", "Presence", "A considered audit and content direction for keeping the brand coherent wherever it turns up."],
];

const journey = [
  ["01", "Understand", "The business, the audience, the market, and the uncomfortable question underneath it all."],
  ["02", "Define", "The position, message, and principles that give the work a useful centre."],
  ["03", "Structure", "A system for making the brand recognisable, flexible, and coherent."],
  ["04", "Express", "A visual and verbal identity with an actual point of view."],
  ["05", "Build", "Digital experiences and practical tools for putting it into the real world."],
];

function Arrow() { return <span className="arrow" aria-hidden="true">↗</span>; }

function MagneticLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  const move = (event: MouseEvent<HTMLAnchorElement>) => {
    const box = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${(event.clientX - box.left - box.width / 2) * 0.11}px`);
    event.currentTarget.style.setProperty("--my", `${(event.clientY - box.top - box.height / 2) * 0.16}px`);
  };
  return <a href={href} className={`magnetic ${className}`} onMouseMove={move} onMouseLeave={(e) => { e.currentTarget.style.setProperty("--mx", "0px"); e.currentTarget.style.setProperty("--my", "0px"); }}>{children}</a>;
}

export function AgencyPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [activeJourney, setActiveJourney] = useState(0);
  const [activeProcess, setActiveProcess] = useState(0);
  const [activeSection, setActiveSection] = useState("work");
  const [sent, setSent] = useState(false);
  const [cursor, setCursor] = useState({ x: -100, y: -100, label: "" });
  const [loaded, setLoaded] = useState(false);
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappHref = whatsapp ? `https://wa.me/${whatsapp.replace(/\D/g, "")}` : "#contact";

  useEffect(() => { const id = window.setTimeout(() => setLoaded(true), 550); return () => window.clearTimeout(id); }, []);
  useEffect(() => {
    const onMove = (event: globalThis.MouseEvent) => setCursor((v) => ({ ...v, x: event.clientX, y: event.clientY }));
    window.addEventListener("mousemove", onMove); return () => window.removeEventListener("mousemove", onMove);
  }, []);
  useEffect(() => {
    const observe = (selector: string, setActive: (index: number) => void) => {
      const items = Array.from(document.querySelectorAll<HTMLElement>(selector));
      const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(items.indexOf(entry.target as HTMLElement));
      }), { rootMargin: "-38% 0px -45% 0px", threshold: 0 });
      items.forEach((item) => observer.observe(item));
      return observer;
    };
    const journeyObserver = observe(".thinking li", setActiveJourney);
    const processObserver = observe(".process-line > div", setActiveProcess);
    const sectionItems = ["work", "approach", "services", "about"].map((id) => document.getElementById(id)).filter((item): item is HTMLElement => Boolean(item));
    const sectionObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); }), { rootMargin: "-20% 0px -65% 0px", threshold: 0 });
    sectionItems.forEach((item) => sectionObserver.observe(item));
    return () => { journeyObserver.disconnect(); processObserver.disconnect(); sectionObserver.disconnect(); };
  }, []);
  const cursorLabel = (label: string) => ({ onMouseEnter: () => setCursor((v) => ({ ...v, label })), onMouseLeave: () => setCursor((v) => ({ ...v, label: "" })) });
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `New Thesis project — ${form.get("company") || form.get("name") || "Inquiry"}`;
    const body = ["Name", form.get("name"), "Email", form.get("email"), "Company / brand", form.get("company"), "Building", form.get("building"), "Need", form.get("need"), "Budget", form.get("budget"), "Additional context", form.get("details")].map((item) => String(item ?? "")).join("\n");
    window.location.href = `mailto:hello.thesishq@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  const closeMenu = () => setMenuOpen(false);

  return <main className={loaded ? "site is-ready" : "site"}>
    <div className="loader" aria-hidden="true"><b>THESIS</b><span>BUILDING BRANDS THAT MAKE SENSE.</span></div>
    <div className={`cursor ${cursor.label ? "cursor-active" : ""}`} style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }} aria-hidden="true">{cursor.label && <i>●</i>}{cursor.label}</div>
    <header className="nav"><a className="wordmark" href="#top" onClick={closeMenu}>THESIS<span>®</span></a><nav className={menuOpen ? "open" : ""} aria-label="Primary navigation"><a className={activeSection === "work" ? "nav-active" : ""} href="#work" onClick={closeMenu}>Work</a><a className={activeSection === "approach" ? "nav-active" : ""} href="#approach" onClick={closeMenu}>Approach</a><a className={activeSection === "services" ? "nav-active" : ""} href="#services" onClick={closeMenu}>Services</a><a className={activeSection === "about" ? "nav-active" : ""} href="#about" onClick={closeMenu}>About</a><a className="nav-cta" href="#contact" onClick={closeMenu}>Start a project <Arrow /></a></nav><button className={`menu ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}><i /><i /></button></header>

    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true"><span /><span /><span /></div>
      <div className="hero-meta"><span>THESIS / 001</span><span>EST. 2026</span></div>
      <div className="hero-copy"><p className="kicker">Strategy, identity, digital, and everything in between.</p><h1><span>We build</span><span>brands that</span><em>make sense.</em></h1></div>
      <div className="hero-bottom"><MagneticLink href="#contact" className="button button-light">Start a project <Arrow /></MagneticLink><a className="text-link" href="#work">Explore our work <span>↓</span></a><p><i className="signal-dot" />BRAND STRATEGY / VISUAL IDENTITY / DIGITAL</p></div>
      <div className="hero-orbit" aria-hidden="true"><span>STRUCTURE FIRST</span><i>+</i><span>DISRUPTION SECOND</span></div>
    </section>

    <section className="manifesto reveal-section" id="approach"><div className="section-number">01 / THE THESIS</div><div className="manifesto-content"><h2>A brand shouldn&apos;t need to <em>explain itself twice.</em></h2><div className="manifesto-foot"><p>Thesis helps businesses figure out what they mean, why it matters, and how it should look, sound, and move through the world.</p><div><span>01 / CLARITY</span><span>02 / STRUCTURE</span><span>03 / EXPRESSION</span></div></div></div></section>

    <section className="work reveal-section" id="work"><div className="section-top"><div className="section-number">02 / SELECTED WORK</div><p>A few things we&apos;ve built, shaped, questioned, and made considerably clearer.</p></div><h2 className="display-heading">Selected <em>work.</em></h2><div className="project-list">{projects.map((project) => <article className={`project ${project.kind}`} key={project.name} {...cursorLabel("VIEW")} tabIndex={0}><div className="project-image"><div className="project-art"><span className="art-num">{project.no}</span><strong>{project.name}</strong><i>{project.kind === "noma" ? "NO/MA" : project.kind === "arc" ? "◒" : "K/"}</i><small>THESIS / {project.year}</small></div></div><div className="project-info"><div><span>{project.no} / {project.category}</span><h3>{project.name}</h3></div><p>{project.description}</p><Arrow /></div></article>)}</div></section>

    <section className="services reveal-section" id="services"><div className="section-number">03 / WHAT WE DO</div><div className="services-grid"><div className="services-title"><p className="kicker">Less decoration. More direction.</p><h2>What we <em>do.</em></h2></div><div className="service-list">{services.map(([no, title, description], index) => <button key={no} className={activeService === index ? "active" : ""} onMouseEnter={() => setActiveService(index)} onFocus={() => setActiveService(index)} onClick={() => setActiveService(index)}><span>{activeService === index && <i className="signal-dot" />}{no}</span><strong>{title}</strong><Arrow /><p>{description}</p></button>)}</div></div></section>

    <section className="thinking reveal-section"><div className="thinking-sticky"><div className="section-number">04 / HOW WE THINK</div><h2>The work starts <em>before</em> the logo.</h2><p>We don&apos;t start by asking what looks good. We start by asking what makes sense.</p></div><ol>{journey.map(([no, title, text], index) => <li key={no} className={activeJourney === index ? "active" : ""}><span>{activeJourney === index && <i className="signal-dot" />}{no}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>

    <section className="about reveal-section" id="about"><div className="about-stamp" aria-hidden="true">T<br />H<br />E<br />S<br />I<br />S</div><div className="about-copy"><div className="section-number">05 / ABOUT THESIS</div><h2>For people who are <em>building something.</em></h2><p>We work with ambitious startups, small businesses, technology companies, and selected personal brands to turn scattered ideas into brands people can actually understand.</p><div className="disciplines"><span>Strategy</span><span>Design</span><span>Technology</span><span>Communication</span></div></div></section>

    <section className="process reveal-section"><div className="section-top"><div className="section-number">06 / PROCESS</div><p>Good design starts with a good question. We keep asking until the answer is useful.</p></div><div className="process-line">{[["01", "Understand"], ["02", "Define"], ["03", "Build"], ["04", "Refine"], ["05", "Launch"]].map(([no, title], index) => <div className={activeProcess === index ? "active" : ""} key={no}><span>{activeProcess === index && <i className="signal-dot" />}{no}</span><b>{title}</b></div>)}</div></section>

    <section className="contact reveal-section" id="contact"><div className="contact-heading"><div className="section-number">07 / START A PROJECT</div><h2>Have something worth <em>building?</em></h2><p>Tell us what you&apos;re building, where you&apos;re stuck, and where you want to go.</p><a className="text-link" href={whatsappHref} target={whatsapp ? "_blank" : undefined} rel="noreferrer">Prefer WhatsApp? Start there <Arrow /></a></div><form onSubmit={submit}><label>Name<input required name="name" autoComplete="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" autoComplete="email" placeholder="you@company.com" /></label><label>Company / Brand<input name="company" placeholder="What are you called?" /></label><label>What are you building?<input required name="building" placeholder="The short version" /></label><label>What do you need?<select name="need" defaultValue=""><option value="" disabled>Select a starting point</option><option>Brand strategy</option><option>Visual identity</option><option>Digital experience</option><option>The full system</option></select></label><label>Budget range<select name="budget" defaultValue=""><option value="" disabled>Choose a range</option><option>Under $5k</option><option>$5k–$15k</option><option>$15k–$30k</option><option>$30k+</option></select></label><label>Anything else?<textarea name="details" placeholder="The useful context, the big ambition, the awkward problem." /></label><button className="button button-dark" type="submit">Start the conversation <Arrow /></button>{sent && <p className="form-success" role="status">Your email app should open with the project details ready to send.</p>}</form></section>

    <footer><div><a className="wordmark" href="#top">THESIS<span>®</span></a><p>Brands that make sense.</p></div><div className="footer-nav"><a href="#work">Work</a><a href="#approach">Approach</a><a href="#services">Services</a><a href="#about">About</a></div><div className="footer-meta"><a href="https://instagram.com/thesishq" target="_blank" rel="noreferrer">Instagram / @thesishq ↗</a><a href="https://x.com/thesis_hq" target="_blank" rel="noreferrer">X / @thesis_hq ↗</a><span>Strategy / Identity / Digital</span><span>© 2026 THESIS</span></div></footer>
  </main>;
}
