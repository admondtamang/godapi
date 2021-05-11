import { Button, Input, Select } from "antd";
import { useEffect, useRef } from "react";
import TitleContainer from "../../../components/TitleConatiner";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequestApi, handleChangeRequestProps, handleMethod } from "../../../redux/request/requestSlice";
import { PullRequestOutlined } from "@ant-design/icons";
import Tabs from "./Tabs";
import { useHotkeys } from "react-hotkeys-hook";
import Form from "antd/lib/form/Form";
import { unwrapResult } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import SecondaryButton from "../../../components/SecondaryButton";
import AddFolder from "./AddFolder";

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
                console.error("hello", err.data);
                // toast.error(err.data.message);
            });
    };

    const selectBefore = (
        <Select defaultValue={method} className="select-before" onChange={handleChange}>
            <Option value="get">GET</Option>
            <Option value="post">POST</Option>
            <Option value="put">PUT</Option>
            <Option value="delete">DELETE</Option>
        </Select>
    );

    return (
        <TitleContainer title="Request" icon={<PullRequestOutlined />}>
            <Form onFinish={onSubmit} style={{ display: "flex" }}>
                <Input ref={urlRef} addonBefore={selectBefore} name="url" value={url} onChange={onChangeUrl} />
                <Button htmlType="submit" onClick={onSubmit}>
                    Send
                </Button>
            </Form>
            <Tabs />
            <AddFolder />
            {/* <SecondaryButton onClick={handleSaveRequest} name="Save Request" background="lightgreen" color="green" button /> */}
        </TitleContainer>
    );
}
