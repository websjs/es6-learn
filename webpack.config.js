const path = require('path');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'public')
    },
    module:{
        rules:[
            {
                test:/\.js?$/,

                include:[
                    path.resolve(__dirname,'./src')
                ],
                exclude:[
                    path.resolve(__dirname,'/dist')
                ],
                loader: 'babel-loader',

                // options: {
                //     "modules": true,
                //     "presets": ["env", "stage-2"],
                //     "plugins": ["transform-runtime", "add-module-exports"]
                // }


            }
        ],
    },
    // options:{}
}