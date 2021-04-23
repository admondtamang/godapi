import React from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import TitleContainer from "../../../components/TitleConatiner";
const DynamicReactJson = dynamic(import("react-json-view"), { ssr: false });

export default function Response() {
    const request = useSelector((state) => state.request);

    const { status, data } = request;
    return <TitleContainer title="Response">{status === "loading" ? "loading " : <DynamicReactJson src={data.data} />}</TitleContainer>;
}
