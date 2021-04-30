import { Button, Input, Select } from "antd";
import { useRef } from "react";
import TitleContainer from "../../../components/TitleConatiner";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequestApi, handleChangeRequestProps, handleMethod } from "../../../redux/request/requestSlice";
import { PullRequestOutlined } from "@ant-design/icons";
import Tabs from "./Tabs";
import { useHotkeys } from "react-hotkeys-hook";
import Form from "antd/lib/form/Form";
import { unwrapResult } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const { Option } = Select;

export default function Request() {
    const dispatch = useDispatch();
    const { url, method } = useSelector((state) => state.request.request);

    const urlRef = useRef();

    useHotkeys("/", () => urlRef.current.focus());

    const onChangeUrl = (e) => {
        dispatch(handleChangeRequestProps(e));
    };

    function handleChange(value) {
        dispatch(handleMethod(value));
    }

    const onSubmit = () => {
        dispatch(fetchRequestApi())
            .then(unwrapResult)
            .catch((err) => {
                console.error("hello", err);
                toast.error(err.data.message);
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
        <TitleContainer title="Request" icon={<PullRequestOutlined />}>
            <Form onFinish={onSubmit} style={{ display: "flex" }}>
                <Input
                    ref={urlRef}
                    addonBefore={selectBefore}
                    name="url"
                    defaultValue="http://dummy.restapiexample.com/api/v1/employees"
                    onChange={onChangeUrl}
                />
                <Button onClick={onSubmit} type="submit">
                    Send
                </Button>
            </Form>
            <Tabs />
        </TitleContainer>
    );
}
