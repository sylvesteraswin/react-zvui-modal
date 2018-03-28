import webpack from "webpack";
import pkg from "./package.json";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const webpackConfig = {
    output: {
        filename: `${pkg.name}.js`,
        library: pkg.moduleName,
        libraryTarget: "umd"
    },
    mode: "production",
    externals: {
        react: {
            root: "React",
            commonjs: "react",
            commonjs2: "react",
            amd: "react"
        },
        "react-dom": {
            root: "ReactDOM",
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "react-dom"
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: "babel-loader"
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    resolve: {
        modules: ["node_modules", "bower_components"],
        extensions: [".jsx", ".js"]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: `${pkg.name}.css`
        })
    ]
};

export default webpackConfig;
