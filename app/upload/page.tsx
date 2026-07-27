import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { createClient } from "@/lib/supabase/server";
import UploadForm from "./UploadForm";

export const metadata: Metadata = {
  title: "BIFRED • Administration Upload",
};

export default async function UploadPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; success?: string }>;
}) {
  const { error, success } = await searchParams;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: recentDocuments } = user
    ? await supabase
        .from("documents")
        .select("id, title, type, file_size, created_at")
        .eq("uploaded_by", user.id)
        .order("created_at", { ascending: false })
        .limit(10)
    : { data: [] };

  return (
    <UploadForm
      navbar={<Navbar variant="full" />}
      error={error}
      success={success}
      recentDocuments={recentDocuments ?? []}
    />
  );
}
