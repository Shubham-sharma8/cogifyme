import { permanentRedirect } from "next/navigation";

export default function InvertPrivacyRedirect() {
  permanentRedirect("/privacy");
}
