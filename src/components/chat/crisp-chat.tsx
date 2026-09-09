"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    $crisp?: any[];
    CRISP_WEBSITE_ID?: string;
  }
}

export function CrispChat() {
  const pathname = usePathname();

  useEffect(() => {
    const websiteId =
      process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID ||
      "18ed3bea-667e-4bbb-9123-b8291eff6c52";

    window.$crisp = window.$crisp || [];
    window.CRISP_WEBSITE_ID = websiteId;

    if (!document.getElementById("crisp-chat-script")) {
      const script = document.createElement("script");
      script.id = "crisp-chat-script";
      script.src = "https://client.crisp.chat/l.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  // Dynamically hide Crisp Chat on /admin pages to keep the admin dashboard clean
  useEffect(() => {
    if (typeof window !== "undefined" && window.$crisp) {
      if (pathname?.startsWith("/admin")) {
        window.$crisp.push(["do", "chat:hide"]);
      } else {
        window.$crisp.push(["do", "chat:show"]);
      }
    }
  }, [pathname]);

  return null;
}
