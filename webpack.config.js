const path = require("path");

module.exports = {
  // ... other configuration options

  resolve: {
    fallback: {
      buffer: require.resolve("buffer/"),
    },
  },

  // ... other configuration options
};
