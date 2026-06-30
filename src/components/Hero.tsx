import { socialLinks } from "../data/profile";

export default function Hero() {
  return (
    <header className="hero wrap">
      <div className="hero-ring">
        <img src="/favicon.svg" alt="ck. logo" />
      </div>
      <span className="eyebrow-line">software engineer · vancouver, bc</span>
      <h1 className="hero-name">Hi, I'm Clara 👋</h1>
      <p className="hero-line">
        Trying to make sure I still do <em>good</em> in this pursuit of
        {"  "}
        <em>greatness</em>.
      </p>
      <div className="hero-links">
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={socialLinks.email}>Email</a>
      </div>
    </header>
  );
}
