import { Button, Input, Select } from "antd";
import { useState } from "react";
import { toast } from "react-toastify";
import TitleContainer from "../../../components/TitleConatiner";
import { useDispatch } from "react-redux";
import { fetchRequestApi } from "../../../redux/request/requestSlice";
import { PullRequestOutlined } from "@ant-design/icons";

const { Option } = Select;

export default function Request() {
    const dispatch = useDispatch();
    const [url, setUrl] = useState("http://dummy.restapiexample.com/api/v1/employees");
    const [method, setMethod] = useState("get");

    const onChangeUrl = (e) => {
        setUrl(e.target.value);
    };

    function handleChange(value) {
        setMethod(value);
    }

    const onSubmit = (value) => {
        if (!url) {
            toast.error("Enter url!");
            return null;
        }

        dispatch(fetchRequestApi({ method: method, url }));
    };

    const selectBefore = (
        <Select defaultValue="get" className="select-before" onChange={handleChange}>
            <Option value="get">GET</Option>
            <Option value="post">POST</Option>
            <Option value="put">PUT</Option>
            <Option value="delete">DELETE</Option>
        </Select>
    );

    return (
        <TitleContainer title="Request" icon={<PullRequestOutlined />}>
            <form className="container" onSubmit={onSubmit} style={{ display: "flex" }}>
                <Input addonBefore={selectBefore} defaultValue="http://dummy.restapiexample.com/api/v1/employees" onChange={onChangeUrl} />
                <Button onClick={onSubmit}>Send</Button>
            </form>
        </TitleContainer>
    );
}
