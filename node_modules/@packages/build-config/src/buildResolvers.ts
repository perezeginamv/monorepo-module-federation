import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

//Настройка resolve.extensions: [".tsx", ".ts", ".js"] в Webpack определяет порядок, в котором Webpack будет искать расширения файлов, когда в импорте не указано расширение.
export function buildResolvers(options: BuildOptions): Configuration['resolve'] {
    return {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            '@': options.paths.src
        }
    }

}