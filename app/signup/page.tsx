import type { Metadata } from "next";
import Link from "next/link";
import { signUp } from "@/app/actions/auth";

export const metadata: Metadata = {
  title: "Créer un compte | BIFRED",
};

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h1>Créer un compte</h1>
        <p>Rejoignez BIFRED pour accéder à la bibliothèque et déposer vos ressources.</p>

        {error && <div className="auth-error">{error}</div>}

        <form action={signUp}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="vous@universite.fr" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="8 caractères minimum"
              minLength={8}
              required
            />
          </div>

          <button type="submit" className="btn-submit">
            Créer mon compte
          </button>
        </form>

        <p className="auth-switch">
          Déjà inscrit ? <Link href="/login">Se connecter</Link>
        </p>
      </div>
    </div>
  );
}
