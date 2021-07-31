/*
 * @Date: 2021-07-30 21:09:05
 * @LastEditors: fashandian
 * @LastEditTime: 2021-07-31 15:56:37
 */
import React from 'react';
import Header from '@/layout/Header';
import Content from '@/layout/Content';

import Styles from './index.less';

export default function DataVCreate() {
    return (
        <div className={Styles.wrapper}>
            <Header />
            <Content />
        </div>
    );
}
