import { Button, Input, Select } from "antd";
import axios from "axios";
import { useState } from "react";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";
import TitleContainer from "../../../components/TitleConatiner";
const DynamicReactJson = dynamic(import("react-json-view"), { ssr: false });
const { Option } = Select;

export default function Request() {
    const [url, setUrl] = useState("");
    const [result, setResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [method, setMethod] = useState("get");

    const onChangeUrl = (e) => {
        setUrl(e.target.value);
    };

    function handleChange(value) {
        setMethod(value);
    }

    const onSubmit = (value) => {
        setIsLoading(true);

        if (!url) {
            toast.error("Enter url!");
            return null;
        }

        axios({
            method,
            url,
        })
            .then((response) => {
                console.log(response.data);
                setResult(response);
                setIsLoading(false);
            })
            .catch((e) => {
                toast.error("Invaild request");
            });
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
        <TitleContainer title="Request">
            <form className="container" onSubmit={onSubmit} style={{ display: "flex" }}>
                <Input addonBefore={selectBefore} defaultValue="https://jsonplaceholder.typicode.com/todos/" onChange={onChangeUrl} />
                <Button onClick={onSubmit}>Send</Button>
            </form>

            {isLoading ? "loading " : <DynamicReactJson src={result.data} />}
        </TitleContainer>
    );
}
