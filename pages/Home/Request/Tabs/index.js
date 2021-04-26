import { Input, Tabs } from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
import { useState } from "react";

import dynamic from "next/dynamic";
const { TabPane } = Tabs;
// const OtherComponent = React.lazy(() => import("./OtherComponent"));

require("codemirror/theme/material.css");

const Json = dynamic(() => import("./Json"), {
    loading: () => <p>Loading...</p>,
});
const Auth = dynamic(() => import("./Auth"), {
    loading: () => <p>Loading...</p>,
});

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
                <Json />
            </TabPane>
            <TabPane
                tab={
                    <span>
                        <AndroidOutlined />
                        Auth
                    </span>
                }
                key="2"
            >
                <Auth />
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
