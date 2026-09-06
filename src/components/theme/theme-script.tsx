export function ThemeScript() {
  const code = `
(function() {
  try {
    var key = 'cogify-theme';
    var saved = localStorage.getItem(key);
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = saved === 'dark' || (!saved && prefersDark) || (saved === 'system' && prefersDark);
    var root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      root.style.colorScheme = 'dark';
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.style.colorScheme = 'light';
      root.setAttribute('data-theme', 'light');
    }
  } catch (e) {}
})();
`;

  return (
    <script
      id="theme-initializer"
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}
