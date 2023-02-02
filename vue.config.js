const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   proxy: {
  //     "http://localhost:8080": {
  //       target: "http://localhost:1192",
  //     }
  //   }
  // }
})

// https://ishidalog.com/?p=37