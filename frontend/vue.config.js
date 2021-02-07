var path = require('path')
    
module.exports = {

    configureWebpack: {
        resolve: {
            alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, 'src/'),
            },
        },
    },

    // css: {
    //     loaderOptions: {
    //         sass: {
    //             additionalData: '@import "@/assets/scss/app.scss";'
    //         }
    //     }
    // },
    // productionSourceMap: true,
} 