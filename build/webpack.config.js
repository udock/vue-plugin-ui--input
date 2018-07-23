module.exports = {
  externals: [
    /lodash\/.*/,
    'vue',
    '@udock/vue-plugin-ui'
  ],
  globals: {
    'lodash/merge': 'merge',
    'vue': 'Vue',
    '@udock/vue-plugin-ui': 'vue-plugin-ui'
  }
}
