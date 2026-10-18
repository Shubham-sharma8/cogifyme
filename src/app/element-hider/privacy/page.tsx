import { permanentRedirect } from "next/navigation";

export default function ElementHiderPrivacyRedirect() {
  permanentRedirect("/privacy");
}
