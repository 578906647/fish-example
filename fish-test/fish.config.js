//详细配置信息请参考http://gitlab.ztesoft.com/fish/fish-cli/wikis/fish-config

module.exports = {
    entry: {
        main: 'main.js', //工程下requirejs的入口文件，也可以是entry:'main.js'
    },
    output: {
        filename: '[name].bundle.js',   // 输出合并解析后的文件名，[name]将由entry的key值替代
        path: ''                        // 输出的路径
    },
    devServer:{
        ...
    },
    build:[
        ...
    ]
}
