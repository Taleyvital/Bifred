import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BIFRED | Bibliothèque Informatique de Référence",
  description:
    "Plateforme universitaire dédiée aux étudiants en Licence Informatique : cours, TD, corrigés et ressources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
