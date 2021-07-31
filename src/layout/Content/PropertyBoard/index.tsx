/*
 * @Date: 2021-07-31 16:14:24
 * @LastEditors: fashandian
 * @LastEditTime: 2021-08-01 00:14:37
 */

import { Tabs } from 'antd';
import React from 'react';
import Styles from './index.less';

export default function PropertyBoard() {
    const handleChange = (key: string) => {
        console.log(key);
    };

    return (
        <div className={Styles.propertyWrapper}>
            <Tabs defaultActiveKey="1" onChange={handleChange}>
                <Tabs.TabPane tab="属性" key="1">
                    Content of Tab Pane 1
                </Tabs.TabPane>
                <Tabs.TabPane tab="数据" key="2">
                    Content of Tab Pane 2
                </Tabs.TabPane>
                <Tabs.TabPane tab="交互" key="3">
                    Content of Tab Pane 3
                </Tabs.TabPane>
            </Tabs>
        </div>
    );
}
