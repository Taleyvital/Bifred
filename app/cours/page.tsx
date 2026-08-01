import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Introduction à l'Algorithmique | BIFRED",
};

export default function CoursPage() {
  return (
    <>
      <Navbar variant="simple" extraLinks showSearchIcon={false} />

      <div className="page-cours">
      <div className="layout">
        {/* ================= SIDEBAR ================= */}
        <aside className="sidebar">
          <h2>Navigation</h2>

          <a href="#intro">
            <i className="fa-solid fa-book"></i>
            Cours
          </a>

          <a href="#td">
            <i className="fa-solid fa-pencil"></i>
            TD &amp; Exercices
          </a>

          <Link href="/upload">
            <i className="fa-solid fa-upload"></i>
            Upload
          </Link>

          <Link href="/bibliotheque">
            <i className="fa-solid fa-magnifying-glass"></i>
            Recherche
          </Link>

          <button className="new-doc">
            <i className="fa-solid fa-plus"></i>
            Nouveau document
          </button>
        </aside>

        {/* ================= MAIN ================= */}
        <main>
          {/* FIL D'ARIANE */}
          <section className="breadcrumb">
            <Link href="/bibliotheque">
              <strong>Bibliothèque</strong>
            </Link>
            <span>
              <strong>›</strong>
            </span>
            <Link href="/bibliotheque">
              <strong>Informatique</strong>
            </Link>
            <span>
              <strong>›</strong>
            </span>
            <strong>Algorithmique</strong>
          </section>

          {/* TITRE */}
          <header className="course-header">
            <h1>Introduction à l&apos;Algorithmique</h1>

            <div className="course-meta">
              <span>
                <i className="fa-solid fa-user"> </i>
                <p>Prof. Julien Dupont</p>
              </span>

              <span>
                <i className="fa-regular fa-calendar"></i>
                <p>Mis à jour le 12 Octobre 2024</p>
              </span>

              <span>
                <i className="fa-solid fa-graduation-cap"></i>
                <p>Licence 1 - Semestre 1</p>
              </span>

              <span className="level">Débutant</span>
            </div>
          </header>

          {/* HERO */}
          <section className="hero-course">
            <p>&quot;Un algorithme n&apos;est rien d&apos;autre qu&apos;une suite d&apos;instructions précises.&quot;</p>
          </section>

          {/* INTRO */}
          <section id="intro">
            <h2>Introduction</h2>

            <p>
              L&apos;algorithmique est le cœur battant de l&apos;informatique. Avant même de
              parler de langages de programmation comme Python ou C++, il est crucial de
              comprendre comment structurer une pensée logique pour résoudre un problème
              donné.
            </p>

            <p>
              Ce cours pose les bases fondamentales : qu&apos;est-ce qu&apos;une variable, une
              boucle, une condition ? Nous apprendrons à décomposer des tâches complexes en
              étapes simples et reproductibles par une machine.
            </p>
          </section>

          {/* PILIERS */}
          <section>
            <h2>Les piliers de l&apos;algorithme</h2>

            <div className="cards">
              <article className="card">
                <i className="fa-solid fa-database"></i>
                <h3>Les Variables</h3>
                <p>Des espaces mémoire nommés pour stocker et manipuler des données temporaires.</p>
              </article>

              <article className="card">
                <i className="fa-solid fa-code-branch"></i>
                <h3>Les Structures</h3>
                <p>Le flux d&apos;exécution : SI (conditions) et TANT QUE (boucles répétitives).</p>
              </article>
            </div>
          </section>

          {/* CODE */}
          <section>
            <div className="section-title">
              <h2>Exemple de Pseudo-code</h2>
              <span>ALGO_SUM.txt</span>
            </div>

            <pre>
              <code>{`ALGORITHME SommeDeuxNombres
VARIABLES
    a, b, resultat : ENTIER

DEBUT

    ECRIRE("Entrez le premier nombre : ")
    LIRE(a)

    ECRIRE("Entrez le second nombre : ")
    LIRE(b)

    resultat <- a + b

    ECRIRE("Le résultat est : ", resultat)

FIN`}</code>
            </pre>
          </section>

          {/* TD */}
          <section id="td">
            <h2>Travaux Dirigés (TD)</h2>

            <div className="td-list">
              <article className="td-card">
                <div>
                  <h3>Fiche TD n°1 : Séquentialité</h3>
                  <p>PDF • 1.2 MB</p>
                </div>
                <a href="#">Télécharger</a>
              </article>

              <article className="td-card">
                <div>
                  <h3>Fiche TD n°2 : Structures de choix</h3>
                  <p>PDF • 850 KB</p>
                </div>
                <a href="#">Télécharger</a>
              </article>
            </div>
          </section>

          {/* EXERCICE */}
          <section>
            <h2>Testez vos connaissances</h2>

            <div className="exercise">
              <p>Exercice rapide :</p>
              <p>
                Écrivez un algorithme qui demande l&apos;âge d&apos;un utilisateur et affiche
                s&apos;il est majeur ou mineur.
              </p>

              <div className="exercise-buttons">
                <button className="btn-primary">Voir la solution</button>
                <button className="btn-secondary">Partager ma réponse</button>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* PDF */}
      <button className="download-pdf">
        <i className="fa-solid fa-download"></i>
        Télécharger en PDF
      </button>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <h2>BIFRED</h2>
          <p>Bibliothèque Informatique</p>
        </div>

        <div className="footer-links">
          <a href="#">Mentions Légales</a>
          <a href="#">Contact</a>
          <a href="#">Ressources L1</a>
          <a href="#">Guide d&apos;utilisation</a>
        </div>

        <p className="copyright">
          © 2026 BIFRED — Bibliothèque Informatique. Apprendre • Comprendre • Réussir.
        </p>
      </footer>
      </div>
    </>
  );
}
