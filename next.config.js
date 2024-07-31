// next.config.js
module.exports = {
    trailingSlash: true,
    output: 'export',
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        '/resume': { page: '/resume' },
        // Add other pages here if necessary
      };
    },
  };
  