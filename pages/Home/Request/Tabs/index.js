import { Input, Tabs } from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { useState } from "react";
const { TabPane } = Tabs;

require("codemirror/theme/material.css");
export default function RequestTabs() {
    const [url, setUrl] = useState("http://dummy.restapiexample.com/api/v1/employees");
    const onChangeUrl = (e) => {
        setUrl(e.target.value);
    };
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
                <Input placeholder="Token" onChange={onChangeUrl} />
            </TabPane>
            <TabPane
                tab={
                    <span>
                        <AndroidOutlined />
                        Basic Auth
                    </span>
                }
                key="3"
            >
                <Input placeholder="User Name" onChange={onChangeUrl} />
                <Input placeholder="Password" onChange={onChangeUrl} />
            </TabPane>
        </Tabs>
    );
}
