import { Tabs } from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
import Result from "./Result";
import Headers from "./Headers";
const { TabPane } = Tabs;

export default function RequestTabs() {
    return (
        <Tabs defaultActiveKey="1">
            <TabPane
                tab={
                    <span>
                        <AppleOutlined />
                        Resut
                    </span>
                }
                key="1"
            >
                <Result />
            </TabPane>
            <TabPane
                tab={
                    <span>
                        <AndroidOutlined />
                        Headers
                    </span>
                }
                key="2"
            >
                <Headers />
            </TabPane>
        </Tabs>
    );
}
