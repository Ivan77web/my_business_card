import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildProps } from './types/config';

export const buildLoaders = (options: BuildProps): webpack.RuleSetRule[] => {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const svgLoader = {
        test: /\.svg$/,
        use: [{
            loader: '@svgr/webpack',
            options: {
                icon: true,
                svgoConfig: {
                    plugins: [
                        {
                            name: 'convertColors',
                            params: {
                                currentColor: true,
                            },
                        },
                    ],
                },
            },
        }],
    };

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes('.module.'),
                        localIdentName: options.isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            }, ,
            "sass-loader",
        ],
    }

    return [
        svgLoader,
        typescriptLoader,
        scssLoader
    ]
}