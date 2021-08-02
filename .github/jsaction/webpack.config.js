module.exports = {
    entry: {
        main: "./main.ts",
        pre: "./pre.ts",
        post: "./post.ts",
    },
    target: "node",
    mode: "production",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        filename: "[name].js",
        path: __dirname
    }
}
