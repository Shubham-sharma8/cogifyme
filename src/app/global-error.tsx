"use client";

import React from "react";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f5f5f5] text-black flex items-center justify-center px-6">
        <div className="max-w-[440px] w-full rounded-[24px] bg-white border border-black/10 p-8 text-center shadow-sm">
          <h1 className="text-[24px] font-semibold tracking-tight text-black">
            Reloading Cogify
          </h1>
          <p className="mt-2 text-[14px] text-black/60 leading-relaxed">
            We just updated this page. Click below to load the latest version.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                reset();
                window.location.reload();
              }}
              className="px-5 py-2.5 rounded-full bg-black text-white text-[13px] font-medium cursor-pointer"
            >
              Reload Page
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
