import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const DELAY = 0.045;

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-heading">
      <span className="section-index">{eyebrow}</span>
      <div>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="portfolio-section scroll-mt-12">
      <SectionHeading eyebrow="01 / 项目" title={DATA.sections.projects.heading} text={DATA.sections.projects.text} />
      <div className="project-grid">
        {DATA.projects.map((project, index) => (
          <BlurFade key={project.title} delay={DELAY * (index + 2)} className="h-full">
            <article className={`case-card case-${project.accent}`}>
              <div className="case-signal" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div className="signal-line"><i /><i /><i /><i /><i /></div>
              </div>
              <div className="case-meta">
                <span>{project.kicker}</span>
                <time>{project.dates}</time>
              </div>
              <h3>{project.title}</h3>
              <p className="case-description">{project.description}</p>
              <div className="case-outcomes">
                {project.outcomes.map((outcome) => <span key={outcome}>{outcome}</span>)}
              </div>
              <div className="case-footer">
                <div className="tag-list">
                  {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
                {project.href && (
                  <a href={project.href} target="_blank" rel="noreferrer" aria-label={`查看 ${project.title} 源码`}>
                    <Icons.github aria-hidden="true" />
                    源码
                  </a>
                )}
              </div>
            </article>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="work" className="portfolio-section scroll-mt-12">
      <SectionHeading eyebrow="02 / 经历" title={DATA.sections.work.heading} />
      <div className="experience-list">
        {DATA.work.map((work, index) => (
          <BlurFade key={work.company} delay={DELAY * (index + 2)}>
            <article className="experience-row">
              <div className="experience-time">{work.start}<span>—</span>{work.end}</div>
              <div className="experience-main">
                <div className="experience-title">
                  <div>
                    <h3>{work.company}</h3>
                    <p>{work.title}</p>
                  </div>
                  <span>{work.location}</span>
                </div>
                <p className="experience-description">{work.description}</p>
              </div>
            </article>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}

function EducationAndSkills() {
  return (
    <section id="education" className="portfolio-section two-column-section scroll-mt-12">
      <div>
        <SectionHeading eyebrow="03 / 教育" title={DATA.sections.education.heading} />
        <div className="education-list">
          {DATA.education.map((education) => (
            <a key={education.school} className="education-card" href={education.href} target="_blank" rel="noreferrer">
              <div>
                <h3>{education.school}</h3>
                <p>{education.degree}</p>
                <span>{education.detail}</span>
              </div>
              <div className="education-date">{education.start}<br />{education.end}</div>
            </a>
          ))}
        </div>
      </div>
      <div id="skills">
        <SectionHeading eyebrow="04 / 能力" title={DATA.sections.skills.heading} />
        <div className="skill-board">
          {DATA.skills.map((skill) => (
            <div className="skill-row" key={skill.group}>
              <h3>{skill.group}</h3>
              <div>{skill.items.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Competitions() {
  return (
    <section id="competitions" className="portfolio-section">
      <SectionHeading eyebrow="05 / 实践" title={DATA.sections.hackathons.heading} text={DATA.sections.hackathons.text} />
      <div className="competition-grid">
        {DATA.hackathons.map((item) => (
          <article key={item.title}>
            <div className="competition-top"><time>{item.dates}</time><span>{item.location}</span></div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="portfolio-main">
      <section id="hero" className="hero-shell">
        <div className="hero-copy">
          <BlurFade delay={DELAY}>
            <div className="status-line"><span />2027 届 · 正在寻找 AI / 金融科技机会</div>
          </BlurFade>
          <BlurFade delay={DELAY * 2}>
            <p className="hero-name">韩左券 <span>/ 华中科技大学</span></p>
            <h1>{DATA.heroHeading}</h1>
          </BlurFade>
          <BlurFade delay={DELAY * 3}>
            <p className="hero-role">{DATA.role}</p>
            <p className="hero-description">{DATA.description}</p>
          </BlurFade>
          <BlurFade delay={DELAY * 4}>
            <div className="hero-actions">
              <a className="primary-action" href="#projects">查看代表项目 <ArrowDown aria-hidden="true" /></a>
              <a className="secondary-action" href={DATA.resumeUrl} target="_blank">下载简历 <Download aria-hidden="true" /></a>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={DELAY * 2} className="portrait-panel">
          <div className="portrait-frame">
            <img src={DATA.avatarUrl} alt="韩左券证件照" />
            <div className="portrait-caption">
              <span>{DATA.role.split("｜")[0]}</span>
              <a href={DATA.locationLink} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" />{DATA.location}</a>
            </div>
          </div>
        </BlurFade>
      </section>

      <BlurFade delay={DELAY * 5}>
        <section className="proof-ledger" aria-label="代表性成果">
          {DATA.proof.map((item, index) => (
            <div key={item.label}>
              <span className="proof-number">0{index + 1}</span>
              <strong>{item.value}</strong>
              <p>{item.label}<small>{item.note}</small></p>
            </div>
          ))}
        </section>
      </BlurFade>

      <section id="about" className="portfolio-section about-grid">
        <SectionHeading eyebrow="定位" title={DATA.sections.about.heading} />
        <div className="about-copy">
          <p>{DATA.summary}</p>
          <div className="pathway" aria-label="工作方法">
            {DATA.pathway.map((step, index) => (
              <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < DATA.pathway.length - 1 && <i>→</i>}</div>
            ))}
          </div>
        </div>
      </section>

      <Projects />
      <Experience />
      <EducationAndSkills />
      <Competitions />

      <section id="contact" className="contact-panel scroll-mt-12">
        <div>
          <span className="section-index">06 / 联系</span>
          <h2>{DATA.sections.contact.heading}</h2>
          <p>{DATA.sections.contact.text}</p>
        </div>
        <div className="contact-actions">
          <a href={`mailto:${DATA.contact.email}`}><Mail aria-hidden="true" />{DATA.contact.email}<ArrowUpRight aria-hidden="true" /></a>
          <a href={`tel:${DATA.contact.tel}`}><Phone aria-hidden="true" />{DATA.contact.tel}</a>
          <a href="https://github.com/RiniceSiberia" target="_blank" rel="noreferrer"><Icons.github aria-hidden="true" />RiniceSiberia<ExternalLink aria-hidden="true" /></a>
        </div>
      </section>

      <footer className="site-footer"><span>韩左券 · 个人作品集</span><span>Astro / GitHub Pages</span></footer>
    </main>
  );
}
