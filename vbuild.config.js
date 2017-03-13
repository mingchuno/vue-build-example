const path = require('path')

// this will copy ./static/** to ./dist/**
module.exports = (options, req) => ({
  entry: 'src/index.js',
  html: {
    title: 'vbuild example',
    template: 'src/index.html'// defaults to $cwd/index.html if it exists, otherwise use built-in template
  },
  postcss: [
    // add more postcss plugins here
    // by default we have autoprefixer pre added
  ],
  webpack(cfg) {
    cfg.resolve.modules.push(path.resolve('src'))

    return cfg
  }
})
