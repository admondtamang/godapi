import React from "react";
import TitleContainer from "../../../components/TitleConatiner";

import { CloudDownloadOutlined } from "@ant-design/icons";
import styled from "styled-components";
import SecondaryButton from "../../../components/SecondaryButton";
import RequestTabs from "./Tabs";
import { useSelector } from "react-redux";
import Loading from "../../../components/Loading";
import LottieFile from "../../../components/LottieFile";
import Dog from "../../../assets/lottie/4888-dog-icon.json";

export default function Response() {
    const request = useSelector((state) => state.request);
    const { status, data } = request;

    if (status == undefined) {
        return (
            <TitleContainer title="Response" icon={<CloudDownloadOutlined />}>
                <LottieFile
                    animationData={Dog}
                    width="600px"
                    height="300px"
                    message={["I Love Reqest. ", <span style={{ color: "orange" }}> Fetch Me!</span>]}
                />
                <b style={{ textAlign: "center" }}></b>
            </TitleContainer>
        );
    }
    const LoadingComponent = <Loading message="Loading..." />;

    return (
        <TitleContainer title="Response" icon={<CloudDownloadOutlined />}>
            {status === "loading" ? (
                LoadingComponent
            ) : (
                <>
                    <Container>
                        <SecondaryButton prefix="Status" name={data.status + " " + data.statusText} color="green" background="lightgreen" />
                        <SecondaryButton prefix="Time" name="2.5 s" color="gray" background="lightgray" />
                        {/* <SecondaryButton
                            prefix="Size"
                            name={data?.headers["content-length"]?.length + "Kb"}
                            // name={"Kb"}
                            color="gray"
                            background="lightgray"
                        /> */}
                    </Container>

                    <RequestTabs />
                </>
            )}
        </TitleContainer>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;
