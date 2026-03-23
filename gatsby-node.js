/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { SourceMapConsumer } = require('source-map')

SourceMapConsumer.initialize({
  'lib/mappings.wasm': 'https://unpkg.com/source-map@0.7.3/lib/mappings.wasm'
})
