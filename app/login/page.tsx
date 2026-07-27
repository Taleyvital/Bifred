import type { Metadata } from "next";
import Link from "next/link";
import { signIn } from "@/app/actions/auth";

export const metadata: Metadata = {
  title: "Connexion | BIFRED",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string; next?: string }>;
}) {
  const { error, message, next } = await searchParams;

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h1>Bon retour</h1>
        <p>Connectez-vous pour accéder à la bibliothèque BIFRED.</p>

        {error && <div className="auth-error">{error}</div>}
        {message && <div className="auth-message">{message}</div>}

        <form action={signIn}>
          <input type="hidden" name="next" value={next ?? "/"} />

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="vous@universite.fr" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" name="password" placeholder="••••••••" required />
          </div>

          <button type="submit" className="btn-submit">
            Se connecter
          </button>
        </form>

        <p className="auth-switch">
          Pas encore de compte ? <Link href="/signup">Créer un compte</Link>
        </p>
      </div>
    </div>
  );
}
