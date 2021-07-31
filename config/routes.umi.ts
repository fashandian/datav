/*
 * @Date: 2021-07-30 21:17:17
 * @LastEditors: fashandian
 * @LastEditTime: 2021-07-31 15:17:26
 */
import { defineConfig } from 'umi';

export default defineConfig({
    routes: [
        {
            path: '/',
            redirect: '/create',
        },
        {
            path: '/create',
            component: '@/pages/create',
            title: 'DataV Create',
        },
        {
            path: '/preview',
            component: '@/pages/preview',
            title: 'DataV Preview',
        },
    ],
}).routes;
