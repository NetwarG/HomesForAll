const path = require('path');
const rootDirectory = path.resolve(__dirname, './');

module.exports = {
    mode: 'development',

    // Path to the entry file, change it according to the path you have
    entry: [
        "babel-polyfill",
        path.join(__dirname, './src/index.js'),
    ],

    // Path for the output files
    output: {
        path: path.join(__dirname, 'dist'),
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
                    path.resolve(rootDirectory, 'src'),
                    path.resolve(rootDirectory, 'node_modules/@react-navigation'),
                    path.resolve(rootDirectory, 'node_modules/@react-native-async-storage'),
                    path.resolve(rootDirectory, 'node_modules/react-native-vector-icons'),
                    path.resolve(rootDirectory, 'node_modules/react-native-paper'),
                    path.resolve(rootDirectory, 'node_modules/react-native-maps'),
                    path.resolve(rootDirectory, 'node_modules/@react-native-community'),
                    path.resolve(rootDirectory, 'node_modules/react-native-vector-icons'),
                    path.resolve(rootDirectory, 'node_modules/react-native-web-maps'),
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