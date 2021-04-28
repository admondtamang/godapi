import { Flex } from "@chakra-ui/layout";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { handleBasicAuth } from "../../../../../../redux/request/requestSlice";

export default function BasicAuth() {
    const dispatch = useDispatch();
    function handleChange(evt) {
        dispatch(handleBasicAuth(evt));
    }
    return (
        <Flex gap={6} direction="column">
            <Input placeholder="User Name" name="username" onChange={handleChange} />
            <Input placeholder="Password" name="password" onChange={handleChange} />
        </Flex>
    );
}
