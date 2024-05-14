const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/*.{ts,tsx}"], // Merging content arrays
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [addVariablesForColors],
});

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
