/*
 * @Date: 2021-07-31 15:55:22
 * @LastEditors: fashandian
 * @LastEditTime: 2021-08-01 00:12:44
 */
import React from 'react';
import Styles from './index.less';
import PropertyBoard from './PropertyBoard';
import SiderBoard from './SiderBoard';
import Workspace from './Workspace';

export default function Content() {
    return (
        <main className={Styles}>
            <section className={Styles.boardSection}>
                <SiderBoard />
            </section>
            <section className={Styles.workspaceSection}>
                <Workspace />
            </section>
            <section className={Styles.boardSection}>
                <PropertyBoard />
            </section>
        </main>
    );
}
