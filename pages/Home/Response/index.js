import React from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import TitleContainer from "../../../components/TitleConatiner";
const DynamicReactJson = dynamic(import("react-json-view"), { ssr: false });

import { CloudDownloadOutlined } from "@ant-design/icons";
import styled from "styled-components";
import SecondaryButton from "../../../components/SecondaryButton";
import RequestTabs from "./Tabs";

export default function Response() {
    const request = useSelector((state) => state.request);

    const { status, data } = request;
    return (
        <TitleContainer title="Response" icon={<CloudDownloadOutlined />}>
            <Container>
                <SecondaryButton name="Status 200 OK" color="green" background="lightgreen" />
                <SecondaryButton name="Time 2.5 s" color="gray" background="lightgray" />
                <SecondaryButton name="Size 5.2 Kb" color="gray" background="lightgray" />
            </Container>

            <RequestTabs />
            {status === "loading" ? "loading " : <DynamicReactJson src={data.data} />}
        </TitleContainer>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;
