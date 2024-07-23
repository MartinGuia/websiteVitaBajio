const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        neutralSilver: "#F5F7FA",
        NeutralDGrey: "#4D4D4D",
        brandPrimary: "#4CAF4F",
        neutralGrey: "#717171",
        gray900: "#18191F",
      },
      backgroundImage:{
        "my-backgroundImage": "url('C:/Users/marke/OneDrive/Documentos/websiteVitabajio/client/src/assets/marcas1.png')"
      }
    },
  },
  plugins: [flowbite.plugin()],
};
