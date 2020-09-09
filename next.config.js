const isProd = process.env.NODE_ENV === 'production'
const cdnAssetPrefix = process.env.CDN_ASSET_PREFIX

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd && cdnAssetPrefix ? cdnAssetPrefix : ''
}
