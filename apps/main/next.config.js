const withTM = require("next-transpile-modules")(["@finances/ui"], {
  resolveSymlinks: true,
});

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);