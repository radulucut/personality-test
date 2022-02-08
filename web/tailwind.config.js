const production = !process.env.ROLLUP_WATCH;

module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: [
      "./src/**/*.svelte",
    ],
    enabled: production // disable purge in dev
  },
}
