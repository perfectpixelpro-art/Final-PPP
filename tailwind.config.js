export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ppp-red': '#ff1616',
      },
      fontFamily: {
        // SF Pro first, then the generic system fonts. Apple's licence does not allow
        // serving SF Pro as a webfont, so it can only be requested, not shipped.
        'sans': [
          'BlinkMacSystemFont',
          '-apple-system',
          "'SF Pro Display'",
          "'SF Pro Text'",
          'ui-sans-serif',
          'system-ui',
          "'Segoe UI'",
          'sans-serif',
        ],
      }
    },
  },
  plugins: [],
}