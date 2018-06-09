var htmlplugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        index:'./index.js'
    },
    output:{
        path:__dirname + '/dist',
        filename:'js/[name]-[chunkhash].js'
    },
    plugins:[new htmlplugin({
        // filename:'index-[hash].html',
        template:'index.html',
        title:'params title',
        date:new Date(),
        minify:{
            removeComments:true,
            collapseWhitespace:true
        }
        // inject:'body'
    })]
}