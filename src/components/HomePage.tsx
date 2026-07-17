import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import { Download, ExternalLink, Mail, MapPin, Phone } from "lucide-react";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="plain-section-title">
      <h2>{children}</h2>
      <span aria-hidden="true" />
    </div>
  );
}

function ProfileSidebar() {
  return (
    <aside className="profile-sidebar">
      <img className="profile-photo" src={DATA.avatarUrl} alt="韩左券证件照" />
      <h1>{DATA.name}</h1>
      <p className="profile-role">{DATA.role}</p>

      <div className="profile-links">
        <a href={DATA.locationLink} target="_blank" rel="noreferrer">
          <MapPin aria-hidden="true" />
          <span>{DATA.location}</span>
        </a>
        <a href={`mailto:${DATA.contact.email}`}>
          <Mail aria-hidden="true" />
          <span>{DATA.contact.email}</span>
        </a>
        <a href={`tel:${DATA.contact.tel}`}>
          <Phone aria-hidden="true" />
          <span>{DATA.contact.tel}</span>
        </a>
        <a href="https://github.com/RiniceSiberia" target="_blank" rel="noreferrer">
          <Icons.github aria-hidden="true" />
          <span>RiniceSiberia</span>
        </a>
      </div>

      <a className="resume-link" href={DATA.resumeUrl} target="_blank">
        <Download aria-hidden="true" />
        下载简历
      </a>
    </aside>
  );
}

function About() {
  return (
    <section id="about" className="plain-section">
      <SectionTitle>关于我</SectionTitle>
      <div className="about-text">
        <p>{DATA.summary}</p>
        <p>
          当前就读于华中科技大学金融学硕士项目，具备计算机本科背景。主要关注机器学习、量化研究、金融数据工程与 AI 产品实现。
        </p>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="plain-section">
      <SectionTitle>教育经历</SectionTitle>
      <div className="simple-timeline">
        {DATA.education.map((item) => (
          <article key={item.school}>
            <div className="timeline-dot" aria-hidden="true" />
            <time>{item.start} — {item.end}</time>
            <h3>{item.degree}</h3>
            <a href={item.href} target="_blank" rel="noreferrer">
              {item.school}<ExternalLink aria-hidden="true" />
            </a>
            {item.detail && <p>{item.detail}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="plain-section">
      <SectionTitle>工作经历</SectionTitle>
      <div className="work-list">
        {DATA.work.map((item) => (
          <article key={item.company}>
            <div className="work-heading">
              <div>
                <h3>{item.title}</h3>
                <p>{item.company} · {item.location}</p>
              </div>
              <time>{item.start} — {item.end}</time>
            </div>
            <p className="work-description">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="plain-section">
      <SectionTitle>代表项目</SectionTitle>
      <div className="simple-projects">
        {DATA.projects.map((project) => (
          <article key={project.title}>
            <div className="project-heading">
              <div>
                <span>{project.kicker}</span>
                <h3>{project.title}</h3>
              </div>
              <time>{project.dates}</time>
            </div>
            <p>{project.description}</p>
            <div className="project-meta">
              <div>{project.technologies.map((item) => <span key={item}>{item}</span>)}</div>
              {project.href && (
                <a href={project.href} target="_blank" rel="noreferrer">
                  <Icons.github aria-hidden="true" />源码
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillsAndAwards() {
  return (
    <div className="bottom-grid">
      <section id="skills" className="plain-section">
        <SectionTitle>能力与工具</SectionTitle>
        <div className="plain-skills">
          {DATA.skills.map((skill) => (
            <div key={skill.group}>
              <h3>{skill.group}</h3>
              <p>{skill.items.join("、")}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="awards" className="plain-section">
        <SectionTitle>竞赛与实践</SectionTitle>
        <div className="award-list">
          {DATA.hackathons.map((item) => (
            <article key={item.title}>
              <time>{item.dates}</time>
              <h3>{item.title}</h3>
              <strong>{item.location}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="academic-shell">
      <nav className="top-navigation" aria-label="主要导航">
        <a href="#about">关于</a>
        <a href="#work">经历</a>
        <a href="#projects">项目</a>
        <a href={DATA.resumeUrl} target="_blank">简历</a>
      </nav>

      <ProfileSidebar />

      <div className="profile-content">
        <About />
        <Education />
        <Work />
        <Projects />
        <SkillsAndAwards />
        <footer>
          <span>韩左券 · AI 与金融科技</span>
          <a href={`mailto:${DATA.contact.email}`}>联系我</a>
        </footer>
      </div>
    </main>
  );
}
