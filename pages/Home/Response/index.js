import { Input } from "antd";
import React from "react";
import TitleContainer from "../../../components/TitleConatiner";

export default function Response() {
    return (
        <TitleContainer title="Response">
            <Input defaultValue="https://jsonplaceholder.typicode.com/todos/" />
        </TitleContainer>
    );
}
