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
          },
          animation: {
            move: "move 5s linear infinite",
          },
          keyframes: {
            move: {
              "0%": { transform: "translateX(-200px)" },
              "100%": { transform: "translateX(200px)" },
            },
          },
      },
    },
    plugins: [],
  };
  