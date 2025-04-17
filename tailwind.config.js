module.exports = {
    darkMode: 'class',
    class: [
        ".src/**/*.{ts,tsx}"
    ],
    content: [
      ".src/**/*.{ts,tsx}"
    ],
    theme: {
      extend: {
        colors: {
            background: 'var(--background)',
            foreground: 'var(--foreground)',
          }
      },
    },
    plugins: [],
  };
  