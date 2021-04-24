import { Tabs } from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
import { UnControlled as CodeMirror } from "react-codemirror2";
const { TabPane } = Tabs;

require("codemirror/theme/material.css");
export default function RequestTabs() {
    return (
        <Tabs defaultActiveKey="1" style={{ minHeight: "400px" }}>
            <TabPane
                tab={
                    <span>
                        <AppleOutlined />
                        JSON
                    </span>
                }
                key="1"
            >
                <CodeMirror
                    value="{}"
                    options={{
                        mode: "json",
                        lineNumbers: true,
                    }}
                />
            </TabPane>
            <TabPane
                tab={
                    <span>
                        <AndroidOutlined />
                        Token
                    </span>
                }
                key="2"
            >
                Tab 2
            </TabPane>
        </Tabs>
    );
}
