import { socialLinks } from "../data/profile";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <a className="footer-mark" href="#top" aria-label="Back to top">
          <img src="/favicon.svg" alt="" aria-hidden="true" />
        </a>
        <p className="footer-note">Let's build something good.</p>
        <div className="footer-links">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href={socialLinks.email}>Email</a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Clara Kwong</p>
      </div>
    </footer>
  );
}
