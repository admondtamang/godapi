import { Flex } from "@chakra-ui/layout";
import { Input } from "antd";

export default function BasicAuth() {
    return (
        <Flex gap={6} direction="column">
            <Input placeholder="User Name" />
            <Input placeholder="Password" />
        </Flex>
    );
}
