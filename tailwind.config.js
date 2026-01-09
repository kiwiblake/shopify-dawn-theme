/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/**/*.liquid",
    "./templates/**/*.json",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['Proxima Nova Condensed', 'system-ui', 'sans-serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        // Custom Pharmaco brand colors
        purple: {
          DEFAULT: "hsl(270, 65%, 35%)",
          light: "hsl(270, 50%, 92%)",
          dark: "hsl(270, 70%, 25%)",
          mid: "hsl(270, 60%, 45%)",
        },
        teal: {
          DEFAULT: "hsl(180, 55%, 45%)",
          light: "hsl(180, 45%, 90%)",
          dark: "hsl(180, 60%, 30%)",
        },
        violet: {
          DEFAULT: "hsl(280, 60%, 40%)",
          light: "hsl(280, 40%, 90%)",
        },
        sage: {
          DEFAULT: "hsl(140, 30%, 45%)",
          light: "hsl(140, 25%, 95%)",
          dark: "hsl(140, 35%, 30%)",
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(120deg, hsl(285, 45%, 50%) 0%, hsl(270, 50%, 50%) 20%, hsl(260, 50%, 52%) 45%, hsl(235, 45%, 55%) 65%, hsl(195, 55%, 50%) 85%, hsl(175, 60%, 50%) 100%)',
        'gradient-purple': 'linear-gradient(135deg, hsl(285, 50%, 55%) 0%, hsl(265, 60%, 40%) 100%)',
        'gradient-teal': 'linear-gradient(135deg, hsl(180, 55%, 45%) 0%, hsl(175, 60%, 40%) 100%)',
        'gradient-card': 'linear-gradient(180deg, hsl(0, 0%, 100%) 0%, hsl(270, 20%, 98%) 100%)',
        'gradient-subtle': 'linear-gradient(135deg, hsl(300, 25%, 97%) 0%, hsl(270, 20%, 96%) 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px -4px hsl(270, 65%, 35%, 0.15)',
        'medium': '0 8px 30px -8px hsl(270, 30%, 15%, 0.15)',
        'glow-purple': '0 0 40px -10px hsl(270, 65%, 35%, 0.4)',
        'glow-teal': '0 0 40px -10px hsl(180, 55%, 45%, 0.4)',
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        float: "float 4s ease-in-out infinite",
        gradient: "gradient-shift 8s ease infinite",
      },
    },
  },
  plugins: [],
}
