import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/app/actions/auth";

export const metadata: Metadata = {
  title: "Mon compte | BIFRED",
};

function formatSize(bytes: number) {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
}

function badgeClass(type: string) {
  if (type === "TD & Exercices") return "td";
  return "cours";
}

export default async function ComptePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: documents } = await supabase
    .from("documents")
    .select("id, title, type, file_size, created_at")
    .eq("uploaded_by", user.id)
    .order("created_at", { ascending: false });

  const initial = (user.email ?? "?").charAt(0).toUpperCase();

  return (
    <>
      <Navbar variant="full" />

      <div className="page-dashboard">
      <div className="dashboard">
        {/* ================= SIDEBAR ================= */}
        <aside className="sidebar">
          <div className="sidebar-logo">
            <div className="logo-icon">
              <i className="fa-solid fa-school"></i>
            </div>

            <div>
              <h2>BIFRED</h2>
              <p>Bibliothèque Informatique</p>
            </div>
          </div>

          <Link href="/bibliotheque">
            <i className="fa-solid fa-book-open"></i>
            TD &amp; Exercices
          </Link>

          <Link href="/upload">
            <i className="fa-solid fa-cloud-arrow-up"></i>
            Upload
          </Link>

          <Link href="/compte" className="active">
            <i className="fa-regular fa-circle-user"></i>
            Mon compte
          </Link>
        </aside>

        {/* ================= CONTENU ================= */}
        <main className="main-content">
          <section className="page-header">
            <div className="badge">
              <i className="fa-regular fa-circle-user"></i>
              <span>Mon compte</span>
            </div>

            <h1>Bonjour</h1>

            <p>Retrouvez vos informations de connexion et l&apos;historique de vos publications.</p>
          </section>

          <section className="upload-card">
            <div className="account-header">
              <div className="account-avatar">{initial}</div>

              <div>
                <h3>{user.email}</h3>
                <p>Membre depuis le {formatDate(user.created_at)}</p>
              </div>
            </div>

            <form action={signOut}>
              <button type="submit" className="btn-cancel">
                Se déconnecter
              </button>
            </form>
          </section>

          {/* ================= PUBLICATIONS ================= */}
          <section className="recent-publications">
            <div className="section-header">
              <h2>Mes publications</h2>
              <Link href="/upload">Déposer un document</Link>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Document</th>
                    <th>Type</th>
                    <th>Date</th>
                  </tr>
                </thead>

                <tbody>
                  {!documents || documents.length === 0 ? (
                    <tr>
                      <td colSpan={3}>Vous n&apos;avez encore publié aucun document.</td>
                    </tr>
                  ) : (
                    documents.map((doc) => (
                      <tr key={doc.id}>
                        <td>
                          <div className="document-info">
                            <div className="document-icon">
                              <i className="fa-solid fa-file-pdf"></i>
                            </div>
                            <div>
                              <h4>{doc.title}</h4>
                              <p>{formatSize(doc.file_size)}</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className={`badge ${badgeClass(doc.type)}`}>{doc.type}</span>
                        </td>
                        <td>{formatDate(doc.created_at)}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>

      {/* ===================================== FOOTER ====================================== */}
      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <h2>BIFRED</h2>
            <p>
              Bibliothèque Informatique de Référence. Une plateforme créée par des
              étudiants, pour les étudiants.
            </p>
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
