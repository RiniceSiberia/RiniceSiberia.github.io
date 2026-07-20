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
        <p>
          你好，我是<strong>韩左券</strong>。目前在
          <a href="https://www.hust.edu.cn/" target="_blank" rel="noreferrer">华中科技大学</a>
          攻读金融学硕士，师从<strong>陈舜老师</strong>，主要研究金融时序模型，并持续关注 AI 金融大模型的应用。此前，我在
          <a href="https://www.nbufe.edu.cn/" target="_blank" rel="noreferrer">宁波财经学院</a>
          完成计算机相关专业本科学习。
        </p>
        <p>
          目前，我主要围绕股票收益与风险建模、大宗商品指数预测和金融数据工程开展项目实践。我希望把模型研究做成可复现的实验和可运行的系统。如果你对金融时序模型、AI 金融应用或相关项目感兴趣，欢迎与我交流。
        </p>
        <p>
          <strong>个人特点：</strong>我做事积极、务实，习惯把目标拆成可验证的步骤，并在协作中保持清晰沟通。我长期保持规律运动和稳定精力，面对高强度学习与开发任务能够持续推进；性格开朗，愿意承担责任，也乐于快速补齐陌生领域的知识。
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
      <div className="project-grid">
        {DATA.projects.map((project) => {
          const content = (
            <>
              <div className="project-card-topline">
                <span>{project.kicker}</span>
                <time>{project.dates}</time>
              </div>
              <h3>
                {project.title}
                {project.private && <small>Private</small>}
              </h3>
              <p>{project.description}</p>
              <div className="project-card-footer">
                <div>{project.technologies.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div>
                {project.href && <Icons.github aria-hidden="true" />}
              </div>
            </>
          );

          return project.href ? (
            <a className="project-card" key={project.title} href={project.href} target="_blank" rel="noreferrer" aria-label={`在 GitHub 查看 ${project.title}`}>
              {content}
            </a>
          ) : (
            <article className="project-card project-card-private" key={project.title}>
              {content}
            </article>
          );
        })}
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
