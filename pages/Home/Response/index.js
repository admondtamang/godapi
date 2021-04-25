import React from "react";
import TitleContainer from "../../../components/TitleConatiner";

import { CloudDownloadOutlined } from "@ant-design/icons";
import styled from "styled-components";
import SecondaryButton from "../../../components/SecondaryButton";
import RequestTabs from "./Tabs";
import { useSelector } from "react-redux";

export default function Response() {
    const request = useSelector((state) => state.request);
    const { status, data } = request;
    return (
        <TitleContainer title="Response" icon={<CloudDownloadOutlined />}>
            {status === "loading" ? (
                "loading"
            ) : (
                <Container>
                    <SecondaryButton prefix="Status" name={data.status + " " + data.statusText} color="green" background="lightgreen" />
                    <SecondaryButton prefix="Time" name="2.5 s" color="gray" background="lightgray" />
                    <SecondaryButton
                        prefix="Size"
                        name={data?.headers["content-length"]?.length + "Kb"}
                        color="gray"
                        background="lightgray"
                    />
                </Container>
            )}

            <RequestTabs />
        </TitleContainer>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;
