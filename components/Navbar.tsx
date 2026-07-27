import Link from "next/link";

type NavbarProps = {
  variant?: "simple" | "full";
  extraLinks?: boolean;
  showSearchIcon?: boolean;
};

export default function Navbar({
  variant = "simple",
  extraLinks = false,
  showSearchIcon = true,
}: NavbarProps) {
  return (
    <nav>
      <div className="logo">
        <h1>BIFRED</h1>
      </div>

      {variant === "full" ? (
        <ul className="nav-links">
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/bibliotheque">Bibliothèque</Link>
          </li>
          <li>
            <Link href="/cours">Cours</Link>
          </li>
          <li>
            <Link href="/about">À propos</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/bibliotheque">Bibliothèque</Link>
          </li>
          <li>
            <Link href="/upload">Upload</Link>
          </li>
          {extraLinks && (
            <li>
              <Link href="/cours">Exercices</Link>
            </li>
          )}
        </ul>
      )}

      {variant === "full" ? (
        <>
          <div className="nav-search">
            <label htmlFor="search" className="sr-only">
              Rechercher
            </label>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input id="search" type="text" placeholder="Rechercher un cours..." />
          </div>

          <div className="icons">
            <button className="icon-btn" type="button">
              <i className="fa-regular fa-bell"></i>
            </button>
            <button className="icon-btn" type="button">
              <i className="fa-regular fa-circle-user"></i>
            </button>
          </div>
        </>
      ) : (
        <div className="icons">
          {showSearchIcon && <i className="fa-solid fa-magnifying-glass"></i>}
          <i className="fa-regular fa-bell"></i>
          <i className="fa-regular fa-circle-user"></i>
        </div>
      )}
    </nav>
  );
}
