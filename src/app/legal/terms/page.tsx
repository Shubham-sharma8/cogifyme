import { permanentRedirect } from "next/navigation";

export default function LegalTermsRedirect() {
  permanentRedirect("/terms");
}
