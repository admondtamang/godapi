import { Tabs } from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
import { UnControlled as CodeMirror } from "react-codemirror2";
const { TabPane } = Tabs;
// require("codemirror/mode/xml/xml");
// require("codemirror/mode/javascript/javascript");

export default function RequestTabs() {
    return (
        <Tabs defaultActiveKey="2">
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
                    value="<h1>I ♥ react-codemirror2</h1>"
                    options={{
                        mode: "xml",
                        theme: "material",
                        lineNumbers: true,
                    }}
                    onChange={(editor, data, value) => {}}
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
