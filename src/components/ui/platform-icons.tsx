import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

/**
 * Authentic Apple Logo (``) SVG matching helumi.app's `[ download for mac]` pill button
 */
export function AppleLogoIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 814 1000"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
    </svg>
  );
}

/**
 * Authentic Apple App Store "A" Popsicle-Stick Glyph SVG
 */
export function AppStoreIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M11.624 7.222l-.876-1.52c-.404-.698-1.296-.938-1.994-.535-.698.403-.938 1.296-.535 1.994l4.756 8.238H18.4c.806 0 1.46.654 1.46 1.46 0 .806-.654 1.46-1.46 1.46H5.6c-.806 0-1.46-.654-1.46-1.46 0-.806.654-1.46 1.46-1.46h2.29l3.734-6.467zm3.896 9.938l1.225 2.122c.403.698 1.296.938 1.994.535.698-.403.938-1.296.535-1.994l-1.015-1.758c-.91.37-1.884.735-2.739 1.095zm-7.326-1.76H5.6c-.806 0-1.46.654-1.46 1.46 0 .806.654 1.46 1.46 1.46h1.27l-.925 1.602c-.403.698-.163 1.591.535 1.994.698.403 1.591.163 1.994-.535l5.95-10.306 1.38-2.39c.403-.698.163-1.591-.535-1.994-.698-.403-1.591-.163-1.994.535L8.194 15.4z" />
    </svg>
  );
}

/**
 * Authentic Safari Compass Glyph SVG
 */
export function SafariIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polygon
        points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

/**
 * Authentic GitHub Mark SVG
 */
export function GitHubIcon({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}
