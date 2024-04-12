/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    colors: {
      main: '#121212',
      secondary: '#FFFFFF',
      action: '#FB8122'
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      boxShadow: {
        white: '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)',
      },

      fontSize: {
        '9xl': '15rem',
      }



    },


  },
  plugins: [
    require("daisyui")
  ],
};
