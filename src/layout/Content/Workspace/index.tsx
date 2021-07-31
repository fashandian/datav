/*
 * @Date: 2021-07-31 16:23:41
 * @LastEditors: fashandian
 * @LastEditTime: 2021-08-01 00:18:24
 */
import { Scrollbars } from 'react-custom-scrollbars';
import Styles from './index.less';

interface WProps {
    width?: number;
    height?: number;
}

export default function Workspace(props: WProps) {
    const { width = 1920, height = 1080 } = props;

    return (
        <Scrollbars>
            <div
                style={{
                    width: width + 45,
                    padding: `20px 25px 20px 20px`,
                }}
            >
                <div
                    style={{
                        height,
                        backgroundColor: '#fff',
                    }}
                >
                    gegege
                </div>
            </div>
        </Scrollbars>
    );
}
