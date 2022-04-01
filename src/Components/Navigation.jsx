//Project files


export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="logo">
        <a href="#hero">
          <h1 className="logo">&lt;T⛥NIM/&gt;</h1>
        </a>
      </div>
      <ul>
        <li>
          <a className="nav-a" href="#about">About</a>
        </li>
        <li>
          <a className="nav-a" href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a className="nav-a" href="#tech stack">Tech stack</a>
        </li>

        <li>
          <a className="nav-a" href="#footer">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
