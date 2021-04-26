import { Input, Tabs } from "antd";
import React, { useEffect, useState } from "react";
const { TabPane } = Tabs;

export default function Auth() {
    const [url, setUrl] = useState("");

    return (
        <Tabs tabPosition="left">
            <TabPane tab="Token" key="1">
                <Input placeholder="Token" onChange={(e) => setUrl(e.target.value)} />
                ;1 Content of Tab 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
                Content of Tab 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
                Content of Tab 3
            </TabPane>
        </Tabs>
    );
}
