import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Input, Radio, Space, Tabs } from "antd";
import React, { useState } from "react";
import BasicAuth from "./BasicAuth";
import Token from "./Token";
const { TabPane } = Tabs;

export default function Auth() {
    const [auth, setAuth] = useState("token");
    const changeAuth = (e) => {
        setAuth(e.target.value);
    };

    const radioAuth = { token: "token", basic_auth: "basic auth" };

    function renderAuth(param) {
        switch (param) {
            case "token":
                return <Token />;
            case "basic_auth":
                return <BasicAuth />;
            default:
                return <Token />;
        }
    }
    return (
        <Flex p={1} gap={2}>
            <Box>
                <Radio.Group value={auth} onChange={changeAuth} style={{ display: "flex", flexDirection: "column", gap: "0.3em" }}>
                    {Object.entries(radioAuth).map(([key, value], i) => (
                        <Radio.Button value={key}>{value}</Radio.Button>
                    ))}
                </Radio.Group>
            </Box>
            <Box flex="1" m={[0, 2]}>
                {renderAuth(auth)}
            </Box>
        </Flex>
    );
}
