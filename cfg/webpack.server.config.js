const path = require('path');
const NODE_ENV = process.env.NODE_ENV;
const nodeExternals = require('webpack-node-externals');


module.exports = {
    target: 'node',
    mode:NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname,'../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: "server.js"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    externals:[nodeExternals()] ,
    module: {
        rules: [{
            test: /\.[jt]sx?$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: "[name]__[local]--[hash:base64:5]"
                            }
                        }
                    }]
            }]
    },

    optimization: {
        minimize: false
    },
    watchOptions: {
        ignored: /node_modules/,
    }
}