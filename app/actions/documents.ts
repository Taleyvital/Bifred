"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

const MAX_SIZE = 25 * 1024 * 1024; // 25 Mo
const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export async function uploadDocument(formData: FormData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const title = formData.get("title") as string;
  const docType = formData.get("docType") as string;
  const docSubject = formData.get("docSubject") as string;
  const description = formData.get("description") as string;
  const file = formData.get("file") as File | null;

  if (!title || !docType || !docSubject || !file || file.size === 0) {
    redirect("/upload?error=" + encodeURIComponent("Veuillez remplir tous les champs requis et choisir un fichier."));
  }

  if (file.size > MAX_SIZE) {
    redirect("/upload?error=" + encodeURIComponent("Le fichier dépasse la taille maximale de 25 Mo."));
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    redirect("/upload?error=" + encodeURIComponent("Format non accepté. Utilisez PDF, DOC ou DOCX."));
  }

  const filePath = `${user.id}/${Date.now()}-${file.name}`;

  const { error: uploadError } = await supabase.storage.from("documents").upload(filePath, file, {
    contentType: file.type,
  });

  if (uploadError) {
    redirect("/upload?error=" + encodeURIComponent(uploadError.message));
  }

  const { error: insertError } = await supabase.from("documents").insert({
    title,
    type: docType,
    subject: docSubject,
    description,
    file_path: filePath,
    file_name: file.name,
    file_size: file.size,
    mime_type: file.type,
    uploaded_by: user.id,
  });

  if (insertError) {
    await supabase.storage.from("documents").remove([filePath]);
    redirect("/upload?error=" + encodeURIComponent(insertError.message));
  }

  redirect("/upload?success=" + encodeURIComponent("Document publié avec succès !"));
}
