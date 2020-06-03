const withFonts = require('next-fonts');

const { API_URL: apiUrl } = process.env;

module.exports = withFonts({
  publicRuntimeConfig: {
    apiUrl,
  },
});
