const path = require('path');
const webpack = require('webpack');
//const rootDir = path.resolve(__dirname, '..');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//minify and uglify
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

//Ahead of time compilation
const { AotPlugin } = require('@ngtools/webpack');
const { NoEmitOnErrorsPlugin, SourceMapDevToolPlugin, NamedModulesPlugin } = require('webpack');
const nodeModules = path.join(process.cwd(), 'node_modules');

//an ordred list of output js chunk files, files added to index.html in this order.
const entryPoints = ["inline","polyfills","vendor","main"];

//use to enable source maps etc.
const isDev = true;
console.log(isDev);

module.exports = {
    entry: {
        polyfills: [ "./src/polyfills.ts" ],
        main: [ "./src/main.dev.ts" ]
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[id]-chunk.js',
        path: path.resolve(__dirname, 'dist'),
        crossOriginLoading: false
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html']
    },
    //devtool: 'inline-source-map',
    devServer: {
        stats: 'minimal',
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: '@ngtools/webpack'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { scourceMap: isDev, minimize: true } },
                        { loader: 'sass-loader', options: { scourceMap: isDev } }
                    ]
                })
            },
            /*
            {
                test: /\.(png|jpe?g|gif|svg|config|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            */
            {
                test: /\.(png|jpe?g|gif|config|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                    limit: 400000,
                    fallback: 'file-loader'
                }
            },
            { 
                test: /\.svg$/, 
                loader: 'file-loader'
            },
            { 
                test: /\.woff$/, 
                loader: 'url-loader',
                options:{
                    mimetype: 'application/font-woff'
                }
            },
            { 
                test: /\.woff2$/, 
                loader: 'url-loader',
                options:{
                    mimetype: 'application/font-woff2'
                }
            },
            { 
                test: /\.[ot]tf$/, 
                loader: 'url-loader',
                options:{
                    mimetype: 'application/octet-stream'
                }
            },
            { 
                test: /\.eot$/, 
                loader: 'url-loader',
                options:{
                    mimetype: 'application/vnd.ms-fontobject'
                }
            },

            { test: /\.html$/, loader: 'raw-loader', exclude: root('src', 'public') }
            //{ test: /\.html$/, loader: 'html-loader' }
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, 'src'), // location of your src
            {} // a map of your routes
        ),
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'index.html'),
            hash: false,
            inject: true,
            compile: true,
            favicon: false,
            minify: false,
            cache: true,
            showErrors: true,
            chunks: "all",
            excludeChunks: [],
            title: "Webpack App",
            xhtml: true,
            //chunksSortMode: 'none'
            chunksSortMode: function sort(left, right) {
                let leftIndex = entryPoints.indexOf(left.names[0]);
                let rightindex = entryPoints.indexOf(right.names[0]);
                if (leftIndex > rightindex) {
                    return 1;
                }
                else if (leftIndex < rightindex) {
                    return -1;
                }
                else {
                    return 0;
                }
            }
        }),
        new CopyWebpackPlugin(
            [
                { from: 'web.config' },
                { from: 'src/assets', to: 'src/assets' }
            ]
        ),
        new SourceMapDevToolPlugin({
            "filename": "[file].map[query]",
            "moduleFilenameTemplate": "[resource-path]",
            "fallbackModuleFilenameTemplate": "[resource-path]?[hash]",
            "sourceRoot": "webpack:///"
          }),
        new CommonsChunkPlugin({
            name: [
              "inline"
            ],
            "minChunks": null
          }),
        new CommonsChunkPlugin({
            name: [
                "vendor"
            ],
            minChunks: (module) => {
                return module.resource
                    && module.resource.startsWith(nodeModules);
            },
            chunks: [
                "main"
              ]
        }),
        new CommonsChunkPlugin({
            name: [
              "main"
            ],
            minChunks: 2,
            async: "common"
          }),
        new AotPlugin({
            "entryModule": path.resolve(__dirname, "src/app/app.module#AppModule"),
            "tsConfigPath": "tsconfig.dev.json"
        })

    ]
};

// Helper functions
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
  }
