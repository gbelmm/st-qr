exports.config = {
  namespace: 'stqr',
  generateDistribution: true,
  generateWWW: false,
  bundles: [
    { components: ['st-qr'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
