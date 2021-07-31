/*
 * @Date: 2021-07-30 21:09:05
 * @LastEditors: fashandian
 * @LastEditTime: 2021-07-31 22:01:09
 */
declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
    export function ReactComponent(
        props: React.SVGProps<SVGSVGElement>,
    ): React.ReactElement;
    const url: string;
    export default url;
}
declare module 'react-custom-scrollbars';
