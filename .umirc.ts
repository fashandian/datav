/*
 * @Date: 2021-07-30 21:09:05
 * @LastEditors: fashandian
 * @LastEditTime: 2021-07-31 15:17:53
 */
import { defineConfig } from 'umi';
import routes from './config/routes.umi';
import proxy from './config/proxy.umi';

export default defineConfig({
    /**
     * 设置 node_modules 目录下依赖文件的编译方式，`type: none` 不希望 node_modules 下的文件走 babel 编译
     *
     * https://umijs.org/zh-CN/config#nodemodulestransform
     *
     * https://umijs.org/zh-CN/guide/boost-compile-speed
     * */
    nodeModulesTransform: {
        type: 'none',
    },
    /** 路由 */
    routes,
    /** 请求代理 */
    proxy,
    fastRefresh: {},
    /** 开启该功能将会自动开启 webpack5 和 dynamicImport */
    mfsu: {},
    dynamicImport: {},
    webpack5: {},
    /** 开启 TypeScript 编译时类型检查 */
    forkTSChecker: {},
    /** 忽略 moment 的 locale 文件，用于减少尺寸 */
    ignoreMomentLocale: true,
    /** 配置图片文件是否走 base64 编译的阈值。默认是 10000 字节 (10k)，少于他会被编译为 base64 编码，否则会生成单独的文件 */
    inlineLimit: 10000,
    /**
     * 配置需要兼容的浏览器最低版本，会自动引入 polyfill 和做语法转换
     * default: { chrome: 49, firefox: 64, safari: 10, edge: 13, ios: 10 }
     * */
    targets: {
        ie: 11,
    },
    hash: true,
    history: {
        type: 'hash',
    },
    /** 启用 antd  */
    antd: {},
    /** 语言 */
    locale: {
        default: 'zh-CN',
        /** 开启后，支持 antd 国际化 */
        antd: true,
        /** 标题国际化，
         * 在项目中配置的 title 及路由中的 title 可直接使用国际化 key，自动被转成对应语言的文案
         * */
        title: true,
    },
    title: 'DataV',
});
