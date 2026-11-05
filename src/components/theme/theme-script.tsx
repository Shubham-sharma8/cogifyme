export function ThemeScript() {
  const code = `
(function() {
  try {
    var key = 'cogify-theme-v2';
    var saved = localStorage.getItem(key);
    var isDark = saved === 'dark';
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
