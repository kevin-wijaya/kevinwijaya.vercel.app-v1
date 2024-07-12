/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",
    "./static/src/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        'ms': '650px',
        'xs': '520px',
      },
      animation: {
        type: 'type 2s ease-out 0.5s alternate both',
        moveup: 'moveup 0.3s ease-in',
        moveupslowly: 'moveup 0.6s ease-in'
      },
      keyframes: {
        type: {
          '0%': { transform: 'translateX(0ch)' },
          '2.941176472%, 5.882352941%': { transform: 'translateX(1ch)' },
          '8.823529412%, 11.76470588%': { transform: 'translateX(2ch)' },
          '14.70588235%, 17.64705882%': { transform: 'translateX(3ch)' },
          '20.58823529%, 23.52941176%': { transform: 'translateX(4ch)' },
          '26.47058824%, 29.41176471%': { transform: 'translateX(5ch)' },
          '32.35294118%, 35.29411765%': { transform: 'translateX(6ch)' },
          '38.23529412%, 41.17647059%': { transform: 'translateX(7ch)' },
          '44.11764706%, 47.05882353%': { transform: 'translateX(8ch)' },
          '50%,          52.94117647%': { transform: 'translateX(9ch)' },
          '55.88235294%, 58.82352941%': { transform: 'translateX(10ch)' },
          '61.76470588%, 64.70588235%': { transform: 'translateX(11ch)' },
          '67.64705882%, 70.58823529%': { transform: 'translateX(12ch)' },
          '73.52941176%, 76.47058824%': { transform: 'translateX(13ch)' },
          '79.41176471%, 82.35294118%': { transform: 'translateX(14ch)' },
          '85.29411765%, 88.23529412%': { transform: 'translateX(15ch)' },
          '91.17647059%, 94.11764706%': { transform: 'translateX(16ch)' },
          '97.05882353%,         100%': { transform: 'translateX(17ch)' },
        },
      },

    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#2e2e2e",
          "secondary": "#ffffff",
          "neutral": "#191919",
          "accent": "#282828",
          "base-200": "000000",
          "base-100": "#d5d5d5",
          "base-300": "#757575",
          "success": "#505050",
          "info": "#404040",
          "warning": "#facc15",
          "error": "#dc2626"
        },
        light: {
          "primary": "#e9e9e9",
          "secondary": "#000000",
          "neutral": "#d1d1d1",
          "accent": "#d6d6d6",
          "base-200": "#ffffff",
          "base-100": "#303030",
          "base-300": "#606060",
          "success": "#c1c1c1",
          "info": "#cccccc",
          "warning": "#f59e0b",
          "error": "#b91c1c",
        }
      },
    ],
  },

  plugins: [
    require("daisyui"),
  ],
}