import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Radio } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAuth } from "../../../../../redux/request/requestSlice";
import BasicAuth from "./BasicAuth";
import Token from "./Token";

export default function Auth() {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.request.request.auth.selected);
    const changeAuth = (e) => {
        dispatch(handleAuth(e.target.value));
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
                <Radio.Group value={auth} onChange={changeAuth} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {Object.entries(radioAuth).map(([key, value], i) => (
                        <Radio.Button value={key} key={i}>
                            {value}
                        </Radio.Button>
                    ))}
                </Radio.Group>
            </Box>
            <Box flex="1" ml={2}>
                {renderAuth(auth)}
            </Box>
        </Flex>
    );
}
