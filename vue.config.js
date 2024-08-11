const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  autoOpenBrowser: true,
  errorOverlay: true
})

//Set App Port to 3000
module.exports = {
  devServer: {
    port: 4000
  }
};

