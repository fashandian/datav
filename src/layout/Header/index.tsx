/*
 * @Date: 2021-07-31 15:50:54
 * @LastEditors: fashandian
 * @LastEditTime: 2021-07-31 16:07:30
 */
import { Button, Space } from 'antd';
import Styles from './index.less';

export default function Header() {
    return (
        <header className={Styles}>
            <Space>
                <Button>页面</Button>
                <Button>模板</Button>
                <Button>图层</Button>
            </Space>
            <Space>
                <Button>导出</Button>
                <Button>导入</Button>
                <Button>预览</Button>
                <Button>保存</Button>
            </Space>
        </header>
    );
}
