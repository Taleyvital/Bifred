import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Bibliothèques Informatique • BIFRED",
};

export default function BibliothequePage() {
  return (
    <>
      <Navbar variant="full" />

      <main>
        <div className="library-layout">
          {/* ================= SIDEBAR ================= */}
          <aside className="sidebar">
            <h2>Navigation</h2>

            <ul className="sidebar-links">
              <li>
                <Link href="/cours">
                  <i className="fa-solid fa-book"></i>
                  Cours
                </Link>
              </li>

              <li>
                <a href="#">
                  <i className="fa-solid fa-pencil"></i>
                  TD &amp; Exercices
                </a>
              </li>
            </ul>

            <div className="filter">
              <h3>Filtres</h3>

              <label htmlFor="matiere">Matière</label>

              <select id="matiere">
                <option>Algorithmique</option>
                <option>Base de Données</option>
                <option>Réseaux</option>
                <option>Système</option>
              </select>
            </div>

            <div className="filter">
              <h3>Type</h3>

              <label htmlFor="cours">
                <input type="checkbox" id="cours" />
                Cours
              </label>

              <label htmlFor="td">
                <input type="checkbox" id="td" />
                TD / TP
              </label>

              <label htmlFor="corrige">
                <input type="checkbox" id="corrige" />
                Exercices Corrigés
              </label>
            </div>

            <div className="levels">
              <button type="button" className="active">
                L1
              </button>
              <button type="button">L2</button>
              <button type="button">L3</button>
            </div>

            <dialog>
              <Link href="/upload" className="btn1">
                <button>+</button>
                Nouveau
              </Link>
            </dialog>
          </aside>

          {/* ================= CONTENU ================= */}
          <section className="content">
            <div className="library-header">
              <h1>
                <i className="fa-solid fa-book-open"></i>
                Bibliothèque Informatique
              </h1>

              <p>
                Retrouvez l&apos;intégralité des ressources académiques de la Licence
                Informatique. Plus de 500 documents validés par la communauté.
              </p>
            </div>

            <div className="search-box">
              <input type="text" placeholder="Rechercher un cours, un professeur ou un mot-clé..." />
              <button>
                Explorer
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <div className="section-title">
              <h2>Ressources récentes</h2>
              <span>L1 Informatique</span>
            </div>

            {/* RESSOURCE 1 */}
            <article className="resource-card">
              <div className="resource-category">
                <i className="fa-regular fa-file-lines"></i>
                Structures de Données Complexes
              </div>

              <h3>
                Étude approfondie des arbres binaires de recherche, des tas (Heaps) et de
                leur complexité temporelle.
              </h3>

              <div className="resource-footer">
                <span className="difficulty hard">Difficile</span>
                <span>
                  <i className="fa-solid fa-graduation-cap"></i>
                  L1 • Semestre 2
                </span>
              </div>

              <Link href="/cours" className="resource-btn">
                Voir le cours
              </Link>
            </article>

            {/* RESSOURCE 2 */}
            <article className="resource-card">
              <div className="resource-category">
                <i className="fa-solid fa-network-wired"></i>
                Modèle OSI &amp; Protocoles IP
              </div>

              <h3>
                Comprendre les sept couches du modèle OSI, IPv4, IPv6 et les protocoles
                réseau.
              </h3>

              <div className="resource-footer">
                <span className="difficulty medium">Moyen</span>
                <span>
                  <i className="fa-solid fa-graduation-cap"></i>
                  L2 • Semestre 1
                </span>
              </div>

              <Link href="/cours" className="resource-btn">
                Voir le cours
              </Link>
            </article>

            {/* RESSOURCE 3 */}
            <article className="resource-card">
              <div className="resource-category">
                <i className="fa-solid fa-code"></i>
                TD : Programmation C
              </div>

              <h3>
                Série complète d&apos;exercices sur les pointeurs, les structures et la
                gestion dynamique de la mémoire.
              </h3>

              <div className="resource-footer">
                <span className="difficulty td">TD &amp; Exercices</span>
                <span>
                  <i className="fa-regular fa-file"></i>
                  12 fichiers • PDF
                </span>
              </div>

              <Link href="/cours" className="resource-btn">
                Voir le cours
              </Link>
            </article>

            {/* CONTRIBUTION */}
            <section className="contribute">
              <div className="contribute-text">
                <i className="fa-solid fa-cloud-arrow-up"></i>
                <h2>Contribuez à la bibliothèque</h2>
                <p>
                  Vous possédez des cours, des TD, des TP, des exercices corrigés ou des
                  annales d&apos;examen ? Partagez vos ressources afin d&apos;aider les
                  futures promotions de Licence Informatique.
                </p>
              </div>

              <div className="contribute">
                <Link href="/upload" className="upload-btn">
                  <i className="fa-solid fa-upload"></i>
                  Déposer un document
                </Link>
              </div>
            </section>

            {/* PAGINATION */}
            <section className="pagination" aria-label="Pagination">
              <button type="button" className="active">
                1
              </button>
              <button type="button">2</button>
              <button type="button">3</button>
              <button type="button">4</button>
              <button type="button">5</button>
              <button type="button">
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </section>
          </section>
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer>
        <div className="footer-container">
          <div className="footer-brand">
            <h2>BIFRED</h2>
            <p>
              Bibliothèque Informatique de Référence. Une plateforme créée par des
              étudiants, pour les étudiants, afin de faciliter l&apos;accès aux ressources
              universitaires en Informatique.
            </p>
          </div>

          <div className="footer-links">
            <h3>Navigation</h3>
            <Link href="/">Accueil</Link>
            <Link href="/bibliotheque">Bibliothèque</Link>
            <Link href="/cours">Cours</Link>
            <Link href="/about">À propos</Link>
          </div>

          <div className="footer-links">
            <h3>Ressources</h3>
            <a href="#">Cours L1</a>
            <a href="#">TD &amp; Exercices</a>
            <a href="#">Annales</a>
            <a href="#">Logiciels</a>
          </div>

          <div className="footer-links">
            <h3>Support</h3>
            <a href="#">Guide d&apos;utilisation</a>
            <a href="#">Mentions légales</a>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <div className="footer-social">
          <a href="#" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#" aria-label="X">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>

        <div className="copyright">
          <p>
            © 2026 <strong>BIFRED</strong> — Bibliothèque Informatique de Référence.
          </p>
          <p>
            <strong>Apprendre • Comprendre • Réussir</strong>
          </p>
        </div>
      </footer>
    </>
  );
}
