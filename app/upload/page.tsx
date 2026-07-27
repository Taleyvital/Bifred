import type { Metadata } from "next";
import UploadForm from "./UploadForm";

export const metadata: Metadata = {
  title: "BIFRED • Administration Upload",
};

export default function UploadPage() {
  return <UploadForm />;
}
