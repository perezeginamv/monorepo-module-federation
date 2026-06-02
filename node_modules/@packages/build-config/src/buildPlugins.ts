import { Configuration, DefinePlugin } from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from 'webpack'
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import path from 'path'
import CopyPlugin from 'copy-webpack-plugin'

export function buildPlugins({ mode, paths, analyzer, platform }: BuildOptions): Configuration['plugins'] {
    const isDev = mode === 'development'
    const isProd = mode === 'production'

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: paths.html,
            favicon: path.resolve(paths.public, 'favicon.ico'),
            publicPath: '/'
        }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform)
        }),

    ]

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin()),
            //проверка типов без замедления сборки, вынос в отдельный процесс
            // plugins.push(new ForkTsCheckerWebpackPlugin()),
            //для обновления без перезагрузки страницы
            plugins.push(new ReactRefreshWebpackPlugin())
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        })),
            plugins.push(new CopyPlugin({
                patterns: [
                    //Перемещение (к примеру переводов) в папку сборки
                    { from: path.resolve(paths.public, 'locales'), to: path.resolve(paths.output, 'locales') }
                ]
            }))

    }
    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins
}