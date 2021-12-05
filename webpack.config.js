const path = require('path');

module.exports = {
    mode: 'development',

    // Path to the entry file, change it according to the path you have
    entry: [
        "babel-polyfill",
        path.join(__dirname, 'src/index.js'),
    ],

    // Path for the output files
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'app.bundle.js',
    },

    // Enable source map support
    devtool: 'source-map',

    // Loaders and resolver config
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'node_modules/react-navigation'),
                    path.resolve(__dirname, 'node_modules/@react-native-async-storage'),
                    path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
                    path.resolve(__dirname, 'node_modules/react-native-paper'),
                    path.resolve(__dirname, 'node_modules/react-native-maps'),
                    path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
                    path.resolve(__dirname, 'node_modules/react-native-web-maps'),
                    path.resolve(__dirname, 'node_modules/react-native'),
                    path.resolve(__dirname, 'node_modules/react-native-web'),
                ],
                //exclude: /node_modules[/\\](?!react-native-vector-icons)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // Disable reading babel configuration
                        babelrc: false,
                        configFile: false,

                        // The configuration for compilation
                        presets: [
                            ['@babel/preset-env', {useBuiltIns: 'usage'}],
                            '@babel/preset-react',
                            '@babel/preset-flow',
                            "@babel/preset-typescript"
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-proposal-object-rest-spread'
                        ],
                    },
                },
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg|ico)$/,
                loader: 'file-loader',
            }
        ],
    },
    resolve: {
        alias: {
            'react-native$': require.resolve('react-native-web'),
            'react-native-maps': 'react-native-web-maps',
        }
    },

    // Development server config
    devServer: {
        contentBase: [path.join(__dirname, './public')],
        historyApiFallback: true,
        port: 3000,
    },
};