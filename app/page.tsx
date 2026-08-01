import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      {/* ===================================== NAVBAR ====================================== */}
      <Navbar variant="simple" />

      <div className="page-home">
      {/* ===================================== HERO ====================================== */}
      <header>
        <div className="content">
          <button className="btn3">📚 Savoir • Intelligence • Réussite</button>

          <h1>BIFRED</h1>

          <h2>Bibliothèque Informatique de Référence</h2>

          <p>
            Une plateforme universitaire dédiée aux étudiants en Licence 1. Retrouvez tous
            les cours, TD, corrigés, annales, logiciels indispensables et ressources
            nécessaires pour réussir votre parcours en informatique.
          </p>

          <button className="btn1">Explorer la bibliothèque</button>

          <button className="btn2">En savoir plus</button>
        </div>

        <div className="content-img">
          <img className="hero-img" src="/Images/hero.jpg" alt="Étudiant travaillant sur un ordinateur" />
        </div>
      </header>

      {/* ===================================== MAIN ====================================== */}
      <main>
        {/* DOMAINES D'ÉTUDE */}
        <section className="section-title">
          <h2>Domaines d&apos;étude</h2>
          <p>
            Explorez les principales matières de la Licence 1 Informatique grâce à des
            cours, TD, exercices corrigés et ressources pédagogiques.
          </p>
        </section>

        <section className="domains">
          <article className="domain-card">
            <i className="fa-solid fa-code"></i>
            <h3>Algorithmique</h3>
            <p>Algorithmes, pseudo-code, logique, tableaux, boucles et résolution de problèmes.</p>
          </article>

          <article className="domain-card">
            <i className="fa-solid fa-c"></i>
            <h3>Langage C</h3>
            <p>Variables, fonctions, pointeurs, tableaux, structures et fichiers.</p>
          </article>

          <article className="domain-card">
            <i className="fa-solid fa-laptop-code"></i>
            <h3>Développement Web</h3>
            <p>HTML, CSS, JavaScript et création d&apos;interfaces modernes.</p>
          </article>

          <article className="domain-card">
            <i className="fa-solid fa-database"></i>
            <h3>Bases de données</h3>
            <p>SQL, Merise, modélisation, requêtes et gestion des données.</p>
          </article>

          <article className="domain-card">
            <i className="fa-solid fa-network-wired"></i>
            <h3>Réseaux</h3>
            <p>Modèle OSI, TCP/IP, adressage IP et configuration réseau.</p>
          </article>

          <article className="domain-card">
            <i className="fa-solid fa-desktop"></i>
            <h3>Systèmes</h3>
            <p>Architecture des ordinateurs, mémoire, processeur et systèmes d&apos;exploitation.</p>
          </article>

          <article className="domain-card">
            <i className="fa-solid fa-file-word"></i>
            <h3>Bureautique</h3>
            <p>Word, Excel, PowerPoint et outils indispensables à l&apos;université.</p>
          </article>

          <article className="domain-card">
            <i className="fa-solid fa-toolbox"></i>
            <h3>Logiciels</h3>
            <p>Visual Studio Code, Code::Blocks, Git, XAMPP, MySQL Workbench et bien d&apos;autres.</p>
          </article>
        </section>

        {/* COURS RÉCENTS */}
        <section className="section-title">
          <h2>Cours récents</h2>
          <p>Les derniers documents ajoutés dans la bibliothèque.</p>
        </section>

        <section className="courses">
          <article className="course">
            <img src="/Images/ALGO.jpg" alt="Algorithmique" />
            <div className="course-content">
              <span className="course-tag">ALGORITHMIQUE</span>
              <p className="course-time">📖 15 min de lecture</p>
              <h3>Introduction aux Algorithmes</h3>
              <p>
                Comprendre les bases de la logique algorithmique et apprendre à résoudre
                efficacement des problèmes.
              </p>
              <div className="course-footer">
                <Link href="/cours">Lire le cours</Link>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </article>

          <article className="course">
            <img src="/Images/tyo.jpg" alt="Système" />
            <div className="course-content">
              <span className="course-tag">SYSTÈMES</span>
              <p className="course-time">📖 22 min de lecture</p>
              <h3>Gestion de la mémoire RAM</h3>
              <p>
                Découvrez les mécanismes de pagination, segmentation et mémoire virtuelle.
              </p>
              <div className="course-footer">
                <Link href="/cours">Lire le cours</Link>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </article>

          <article className="course">
            <img src="/Images/sqt.jpg" alt="SQL" />
            <div className="course-content">
              <span className="course-tag">BASES DE DONNÉES</span>
              <p className="course-time">📖 30 min de lecture</p>
              <h3>Algèbre Relationnelle</h3>
              <p>Projection, sélection, jointure et fondements des requêtes SQL.</p>
              <div className="course-footer">
                <Link href="/cours">Lire le cours</Link>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </article>
        </section>

        {/* CONTRIBUER */}
        <section className="contribute">
          <div className="contribute-text">
            <h2>Contribuez à la bibliothèque</h2>
            <p>
              Vous possédez des cours, TD, corrigés, examens, fiches de révision ou projets
              réalisés en Licence 1 ? Déposez-les afin d&apos;aider les prochaines promotions.
            </p>
            <Link href="/upload" className="btn">
              Déposer un document
            </Link>
          </div>
        </section>

        {/* LOGICIELS À INSTALLER */}
        <section className="section-title">
          <h2>Logiciels indispensables</h2>
          <p>Tous les outils nécessaires pour réussir la Licence 1.</p>
        </section>

        <section className="domains">
          <article className="domain-card">
            <i className="fa-solid fa-code"></i>
            <h3>Visual Studio Code</h3>
            <p>Éditeur moderne pour HTML, CSS, JavaScript et de nombreux langages.</p>
          </article>

          <article className="domain-card">
            <i className="fa-solid fa-terminal"></i>
            <h3>Code::Blocks</h3>
            <p>IDE conseillé pour apprendre le langage C.</p>
          </article>

          <article className="domain-card">
            <i className="fa-brands fa-git-alt"></i>
            <h3>Git</h3>
            <p>Gestionnaire de versions indispensable en informatique.</p>
          </article>

          <article className="domain-card">
            <i className="fa-solid fa-database"></i>
            <h3>MySQL Workbench</h3>
            <p>Administration et création de bases de données SQL.</p>
          </article>
        </section>

        {/* STATISTIQUES */}
        <section className="section-title">
          <h2>BIFRED en chiffres</h2>
        </section>

        <section className="domains">
          <article className="domain-card">
            <i className="fa-solid fa-book"></i>
            <h3>120+</h3>
            <p>Cours disponibles</p>
          </article>

          <article className="domain-card">
            <i className="fa-solid fa-file-lines"></i>
            <h3>80+</h3>
            <p>Travaux dirigés</p>
          </article>

          <article className="domain-card">
            <i className="fa-solid fa-graduation-cap"></i>
            <h3>100%</h3>
            <p>Gratuit</p>
          </article>

          <article className="domain-card">
            <i className="fa-solid fa-users"></i>
            <h3>Communauté</h3>
            <p>Étudiants solidaires</p>
          </article>
        </section>
      </main>

      {/* ===================================== FOOTER ====================================== */}
      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <h2>BIFRED</h2>
            <p>
              Bibliothèque Informatique de Référence. Une plateforme créée par des
              étudiants, pour les étudiants.
            </p>
            <div className="social">
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-discord"></i>
            </div>
          </div>

          <div className="footer-links">
            <h3>Navigation</h3>
            <ul>
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/bibliotheque">Bibliothèque</Link></li>
              <li><Link href="/cours">Cours</Link></li>
              <li><Link href="/cours">TD</Link></li>
              <li><Link href="/upload">Upload</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Guide d&apos;utilisation</a></li>
              <li><a href="#">Mentions légales</a></li>
              <li><a href="#">Politique de confidentialité</a></li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          © 2026 BIFRED — Bibliothèque Informatique de Référence. Tous droits réservés.
        </div>
      </footer>
      </div>
    </>
  );
}
