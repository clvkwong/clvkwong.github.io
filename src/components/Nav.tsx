const sections = ["about", "skills", "experience", "projects", "education"];

export default function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <span className="logo">Clara Kwong</span>
        <div className="navlinks">
          {sections.map((id) => (
            <a key={id} href={`#${id}`}>
              {id}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
