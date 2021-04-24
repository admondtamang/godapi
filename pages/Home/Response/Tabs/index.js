import { Tabs } from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
import { UnControlled as CodeMirror } from "react-codemirror2";
import Result from "./Result";
const { TabPane } = Tabs;
// require("codemirror/mode/xml/xml");
// require("codemirror/mode/javascript/javascript");

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
                Tab 2
            </TabPane>
        </Tabs>
    );
}
