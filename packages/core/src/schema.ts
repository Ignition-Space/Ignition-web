import type { AxiosRequestConfig } from 'axios'

export type SemverVersion = `${number}.${number}.${number}`

/**
 * 当前搭建平台的Schema协议类型，后面所有包都使用core中的标准化定义。
 */
export interface SchemaModelConfig {
    // 当前协议的版本号，semver是它的格式
    version: SemverVersion;

    // 当前依赖包
    library: {
        name: string;
        urls: string[];
        globalVar?: number;
    }[]
    i18n?: {
        zh: Record<string, string>,
        eu: Record<string, string>
    };
    dataSource: {
        key: string;
        name: string;
        request: AxiosRequestConfig,
    }[];
    htmlBody: any
}

export const a = 1
