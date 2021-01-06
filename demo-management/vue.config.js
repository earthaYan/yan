
module.exports={
    outputDir:'dist',
    assetsDir:'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer:{
        open:true,
        host:'localhost',
        port:8080,
        https:false,
        hotOnly:false,
        // 配置跨域
        proxy:{
            '/api':{
                target:'http://imissu.herokuapp.com/api/',
                ws:true,
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}