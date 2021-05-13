import { IconButton } from "@chakra-ui/button";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";

export default function RequestMethodIcon({ req }) {
    const { method } = req;
    const [deleteButton, setDeleteButton] = useState(false);
    const Container = styled.span`
        background-color: ${deleteButton ? "white" : "lightgreen"};
        padding: 5px;
        margin-right: 5px;
        border-radius: 5px;
        font-weight: bold;
        color: green;
    `;

    function handleDeleteRequest() {
        alert("helllo");
    }

    return (
        <Container onMouseOver={() => setDeleteButton(true)}>
            {!deleteButton ? method : <DeleteOutlined color="red" onClick={() => handleDeleteRequest()} />}
        </Container>
    );
}
