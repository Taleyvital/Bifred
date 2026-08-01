"use client";

import { useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { uploadDocument } from "@/app/actions/documents";

export type RecentDocument = {
  id: string;
  title: string;
  type: string;
  file_size: number;
  created_at: string;
};

type UploadFormProps = {
  navbar: ReactNode;
  error?: string;
  success?: string;
  recentDocuments: RecentDocument[];
};

function formatSize(bytes: number) {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" });
}

function badgeClass(type: string) {
  if (type === "Cours") return "cours";
  if (type === "TD & Exercices") return "td";
  return "cours";
}

export default function UploadForm({ navbar, error, success, recentDocuments }: UploadFormProps) {
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : null);
  }

  function handleRemoveFile() {
    setFileName(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  return (
    <>
      {navbar}

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

          <Link href="/upload" className="active">
            <i className="fa-solid fa-cloud-arrow-up"></i>
            Upload
          </Link>

          <Link href="/bibliotheque">
            <i className="fa-solid fa-magnifying-glass"></i>
            Recherche
          </Link>

          <button className="new-document">
            <i className="fa-solid fa-plus"></i>
            Nouveau document
          </button>
        </aside>

        {/* ================= CONTENU ================= */}
        <main className="main-content">
          <section className="page-header">
            <div className="badge">
              <i className="fa-solid fa-lock"></i>
              <span>Admin Dashboard</span>
            </div>

            <h1>Publier une ressource</h1>

            <p>
              Partagez de nouveaux supports pédagogiques avec la communauté BIFRED.
              Assurez-vous que le document est de qualité, correctement catégorisé et
              conforme aux règles de publication.
            </p>
          </section>

          <section className="upload-card">
            {error && <div className="auth-error">{error}</div>}
            {success && <div className="auth-message">{success}</div>}

            <form id="uploadForm" action={uploadDocument}>
              <div className="form-grid">
                <div className="left-column">
                  <h2>
                    <i className="fa-solid fa-file-lines"></i>
                    Informations générales
                  </h2>

                  <div className="form-group">
                    <label htmlFor="docTitle">Titre du document</label>
                    <input
                      type="text"
                      id="docTitle"
                      name="title"
                      placeholder="Ex : Introduction aux Algorithmes"
                      required
                    />
                  </div>

                  <div className="double-input">
                    <div className="form-group">
                      <label htmlFor="docType">Type du document</label>
                      <select id="docType" name="docType" required defaultValue="">
                        <option value="">Choisir un type</option>
                        <option>Cours</option>
                        <option>TD &amp; Exercices</option>
                        <option>Correction</option>
                        <option>Sujet de Projet</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="docSubject">Matière</label>
                      <select id="docSubject" name="docSubject" required defaultValue="">
                        <option value="">Choisir une matière</option>
                        <option>Algorithmique</option>
                        <option>Base de données</option>
                        <option>Développement Web</option>
                        <option>Réseaux</option>
                        <option>Système</option>
                        <option>Mathématiques</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      rows={6}
                      placeholder="Décrivez brièvement le contenu du document..."
                    ></textarea>
                  </div>
                </div>

                {/* ================= COLONNE DROITE ================= */}
                <div className="right-column">
                  <h2>
                    <i className="fa-solid fa-cloud-arrow-up"></i>
                    Fichiers Sources
                  </h2>

                  <div className="upload-zone">
                    <input
                      ref={fileInputRef}
                      type="file"
                      id="fileInput"
                      name="file"
                      accept=".pdf,.doc,.docx"
                      hidden
                      required
                      onChange={handleFileChange}
                    />

                    <label htmlFor="fileInput" className="drop-area">
                      <i className="fa-solid fa-cloud-arrow-up"></i>
                      <h3>Glissez-déposez votre fichier</h3>
                      <p>ou cliquez ici pour sélectionner un document</p>

                      <div className="file-types">
                        <span>
                          <i className="fa-solid fa-file-pdf"></i>
                          PDF
                        </span>
                        <span>
                          <i className="fa-solid fa-file-word"></i>
                          DOCX
                        </span>
                      </div>
                    </label>

                    {/* ================= APERÇU ================= */}
                    <div className="file-preview" id="filePreview">
                      <div className="file-info">
                        <i className="fa-solid fa-file-pdf"></i>
                        <div>
                          <h4 id="fileName">{fileName ?? "Aucun fichier sélectionné"}</h4>
                          <p>PDF • DOC • DOCX</p>
                        </div>
                      </div>

                      <button
                        type="button"
                        id="removeFile"
                        className="remove-file"
                        onClick={handleRemoveFile}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>

                    {/* ================= RÈGLES ================= */}
                    <div className="publish-rules">
                      <h3>
                        <i className="fa-solid fa-circle-info"></i>
                        Règles de publication
                      </h3>

                      <ul>
                        <li>
                          Taille maximale : <strong>25 Mo</strong>
                        </li>
                        <li>
                          Formats acceptés : <strong>PDF, DOC, DOCX</strong>
                        </li>
                        <li>Vérifiez que le document est lisible.</li>
                        <li>Respectez les droits d&apos;auteur.</li>
                        <li>Les documents sont validés avant publication.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* ================= FOOTER DU FORMULAIRE ================= */}
              <div className="form-footer">
                <div className="security">
                  <i className="fa-solid fa-shield-halved"></i>
                  <span>
                    Tous les documents sont vérifiés avant leur publication sur BIFRED.
                  </span>
                </div>

                <div className="actions">
                  <button type="reset" className="btn-cancel" onClick={handleRemoveFile}>
                    Annuler
                  </button>

                  <button type="submit" className="btn-submit">
                    Publier le document
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </form>
          </section>

          {/* ================= PUBLICATIONS ================= */}
          <section className="recent-publications">
            <div className="section-header">
              <h2>Vos publications récentes</h2>
              <a href="#">Voir tout l&apos;historique</a>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Document</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {recentDocuments.length === 0 ? (
                    <tr>
                      <td colSpan={4}>Aucune publication pour le moment.</td>
                    </tr>
                  ) : (
                    recentDocuments.map((doc) => (
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
                        <td>
                          <button className="action-btn">
                            <i className="fa-solid fa-ellipsis"></i>
                          </button>
                        </td>
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
