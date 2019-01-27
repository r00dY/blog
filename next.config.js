module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
        // Perform customizations to webpack config
        // Important: return the modified config
        //
        config.module.rules.push({
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                'isomorphic-style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 2
                    }
                }
            ]
        });

        return config
    }
};