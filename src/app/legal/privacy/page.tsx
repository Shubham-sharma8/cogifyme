import { permanentRedirect } from "next/navigation";

export default function LegalPrivacyRedirect() {
  permanentRedirect("/privacy");
}
