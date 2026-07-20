import { DATA } from "@/data/resume";
import { EN } from "@/data/translations";
import { Icons } from "@/components/icons";
import { Download, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";

type Language = "zh" | "en";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="plain-section-title">
      <h2>{children}</h2>
      <span aria-hidden="true" />
    </div>
  );
}

function ProfileSidebar({ language }: { language: Language }) {
  const isEnglish = language === "en";
  return (
    <aside className="profile-sidebar">
      <img className="profile-photo" src={DATA.avatarUrl} alt={isEnglish ? EN.profile.photoAlt : "韩左券证件照"} />
      <h1>{isEnglish ? EN.name : DATA.name}</h1>
      <p className="profile-role">{isEnglish ? EN.role : DATA.role}</p>

      <div className="profile-links">
        <a href={DATA.locationLink} target="_blank" rel="noreferrer">
          <MapPin aria-hidden="true" />
          <span>{isEnglish ? EN.location : DATA.location}</span>
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
        {isEnglish ? EN.profile.download : "下载简历"}
      </a>
    </aside>
  );
}

function About({ language }: { language: Language }) {
  const isEnglish = language === "en";
  return (
    <section id="about" className="plain-section">
      <SectionTitle>{isEnglish ? EN.sections.about : "关于我"}</SectionTitle>
      <div className="about-text">
        {isEnglish ? (
          <>
            <p>
              Hi, I’m <strong>Han Zuoquan</strong>, currently pursuing an M.S. in Finance at <a href="https://www.hust.edu.cn/" target="_blank" rel="noreferrer">Huazhong University of Science and Technology</a>. I am advised by <a href="https://faculty.hust.edu.cn/ChenShun/zh_CN/index.htm" target="_blank" rel="noreferrer">Prof. Shun Chen</a>, and my research centers on financial time-series models and applications of financial large language models. I earned a B.S. in Computer Science and Technology from <a href="https://www.nbufe.edu.cn/" target="_blank" rel="noreferrer">Ningbo University of Finance &amp; Economics</a>.
            </p>
            <p>I currently work on equity return and risk modeling, commodity-index forecasting, and financial data engineering. I aim to turn model research into reproducible experiments and working systems. If you are interested in financial time-series modeling, AI for finance, or related projects, feel free to reach out.</p>
            <p><strong>Personal strengths:</strong> I am positive, pragmatic, and comfortable breaking broad goals into verifiable steps while communicating clearly with collaborators. Regular exercise helps me sustain energy through demanding research and development work. I am outgoing, accountable, and quick to learn in unfamiliar domains.</p>
          </>
        ) : (
          <>
            <p>
              你好，我是<strong>韩左券</strong>。目前在<a href="https://www.hust.edu.cn/" target="_blank" rel="noreferrer">华中科技大学</a>攻读金融学硕士，师从<a href="https://faculty.hust.edu.cn/ChenShun/zh_CN/index.htm" target="_blank" rel="noreferrer">陈舜老师</a>，主要研究金融时序模型，并持续关注 AI 金融大模型的应用。此前，我在<a href="https://www.nbufe.edu.cn/" target="_blank" rel="noreferrer">宁波财经学院</a>获得计算机科学与技术学士学位。
            </p>
            <p>目前，我主要围绕股票收益与风险建模、大宗商品指数预测和金融数据工程开展项目实践。我希望把模型研究做成可复现的实验和可运行的系统。如果你对金融时序模型、AI 金融应用或相关项目感兴趣，欢迎与我交流。</p>
            <p><strong>个人特点：</strong>我做事积极、务实，习惯把目标拆成可验证的步骤，并在协作中保持清晰沟通。我长期保持规律运动和稳定精力，面对高强度学习与开发任务能够持续推进；性格开朗，愿意承担责任，也乐于快速补齐陌生领域的知识。</p>
          </>
        )}
      </div>
    </section>
  );
}

function Education({ language }: { language: Language }) {
  const isEnglish = language === "en";
  return (
    <section id="education" className="plain-section">
      <SectionTitle>{isEnglish ? EN.sections.education : "教育经历"}</SectionTitle>
      <div className="simple-timeline">
        {DATA.education.map((item, index) => (
          <article key={item.school}>
            <time>{item.start} — {isEnglish ? EN.education[index].end : item.end}</time>
            <h3>{isEnglish ? EN.education[index].degree : item.degree}</h3>
            <a href={item.href} target="_blank" rel="noreferrer">
              {isEnglish ? EN.education[index].school : item.school}<ExternalLink aria-hidden="true" />
            </a>
            {item.detail && <p>{item.detail}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

function Work({ language }: { language: Language }) {
  const isEnglish = language === "en";
  return (
    <section id="work" className="plain-section">
      <SectionTitle>{isEnglish ? EN.sections.work : "工作经历"}</SectionTitle>
      <div className="work-list">
        {DATA.work.map((item, index) => (
          <article key={item.company}>
            <div className="work-heading">
              <div>
                <h3>{isEnglish ? EN.work[index].title : item.title}</h3>
                <p>{isEnglish ? EN.work[index].company : item.company} · {isEnglish ? EN.work[index].location : item.location}</p>
              </div>
              <time>{item.start} — {item.end}</time>
            </div>
            <p className="work-description">{isEnglish ? EN.work[index].description : item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects({ language }: { language: Language }) {
  const isEnglish = language === "en";
  return (
    <section id="projects" className="plain-section">
      <SectionTitle>{isEnglish ? EN.sections.projects : "代表项目"}</SectionTitle>
      <div className="project-grid">
        {DATA.projects.map((project, index) => {
          const translation = EN.projects[index];
          const content = (
            <>
              <div className="project-card-topline">
                <span>{isEnglish ? translation.kicker : project.kicker}</span>
                <time>{isEnglish ? translation.dates : project.dates}</time>
              </div>
              <h3>
                {isEnglish ? translation.title : project.title}
                {project.private && <small>Private</small>}
              </h3>
              <p>{isEnglish ? translation.description : project.description}</p>
              <div className="project-card-footer">
                <div>{(isEnglish ? translation.technologies : project.technologies.slice(0, 4)).map((item) => <span key={item}>{item}</span>)}</div>
                {project.href && <Icons.github aria-hidden="true" />}
              </div>
            </>
          );

          return project.href ? (
            <a className="project-card" key={project.title} href={project.href} target="_blank" rel="noreferrer" aria-label={isEnglish ? `View ${translation.title} on GitHub` : `在 GitHub 查看 ${project.title}`}>
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

function SkillsAndAwards({ language }: { language: Language }) {
  const isEnglish = language === "en";
  return (
    <div className="bottom-grid">
      <section id="skills" className="plain-section">
        <SectionTitle>{isEnglish ? EN.sections.skills : "能力与工具"}</SectionTitle>
        <div className="plain-skills">
          {DATA.skills.map((skill, index) => (
            <div key={skill.group}>
              <h3>{isEnglish ? EN.skills[index].group : skill.group}</h3>
              <p>{(isEnglish ? EN.skills[index].items : skill.items).join(isEnglish ? ", " : "、")}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="awards" className="plain-section">
        <SectionTitle>{isEnglish ? EN.sections.awards : "竞赛与实践"}</SectionTitle>
        <div className="award-list">
          {DATA.hackathons.map((item, index) => (
            <article key={item.title}>
              <time>{item.dates}</time>
              <h3>{isEnglish ? EN.awards[index].title : item.title}</h3>
              <strong>{isEnglish ? EN.awards[index].location : item.location}</strong>
              <p>{isEnglish ? EN.awards[index].description : item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("zh");
  const isEnglish = language === "en";

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    if (savedLanguage === "en") setLanguage("en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "zh";
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  return (
    <main className="academic-shell">
      <nav className="top-navigation" aria-label={isEnglish ? "Primary navigation" : "主要导航"}>
        <a href="#about">{isEnglish ? EN.navigation.about : "关于"}</a>
        <a href="#work">{isEnglish ? EN.navigation.work : "经历"}</a>
        <a href="#projects">{isEnglish ? EN.navigation.projects : "项目"}</a>
        <a href={DATA.resumeUrl} target="_blank">{isEnglish ? EN.navigation.resume : "简历"}</a>
        <div className="language-switch" aria-label={isEnglish ? "Language" : "语言"}>
          <button type="button" className={!isEnglish ? "active" : ""} onClick={() => setLanguage("zh")} aria-pressed={!isEnglish}>中</button>
          <span aria-hidden="true">/</span>
          <button type="button" className={isEnglish ? "active" : ""} onClick={() => setLanguage("en")} aria-pressed={isEnglish}>EN</button>
        </div>
      </nav>

      <ProfileSidebar language={language} />

      <div className="profile-content">
        <About language={language} />
        <Education language={language} />
        <Work language={language} />
        <Projects language={language} />
        <SkillsAndAwards language={language} />
        <footer>
          <span>{isEnglish ? EN.footer.title : "韩左券 · AI 与金融科技"}</span>
          <a href={`mailto:${DATA.contact.email}`}>{isEnglish ? EN.footer.contact : "联系我"}</a>
        </footer>
      </div>
    </main>
  );
}
