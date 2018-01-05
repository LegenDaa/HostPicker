var path=require("path");
var webpack=require("webpack");

module.exports={
    entry:{
        entry:main.resolve(__dirname,"./src/index")
    },
    output:{
        path:path.resolve(__dirname,"./dist"),
        fileName:"[name].[hash].js",
    },
    devtool:"source-map",
    target:"electron",
    modules:{
        loaders:[
            {
                test:/*.js$/
            }
        ]
    },
    plugin:[

    ]
}