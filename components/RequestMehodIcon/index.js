import { IconButton } from "@chakra-ui/button";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { removeRequest } from "../../redux/Folder/folderSlice";
export default function RequestMethodIcon({ req, folder }) {
    const { method, id } = req;

    const [deleteButton, setDeleteButton] = useState(false);
    const dispatch = useDispatch();
    const Container = styled.span`
        background-color: ${deleteButton ? "white" : "lightgreen"};
        padding: 5px;
        margin-right: 5px;
        border-radius: 5px;
        font-weight: bold;
        color: green;
    `;

    function handleDeleteRequest() {
        dispatch(removeRequest({ id, folder }));
    }

    return (
        <Container onMouseOver={() => setDeleteButton(true)}>
            {!deleteButton ? method : <DeleteOutlined color="red" onClick={() => handleDeleteRequest()} />}
        </Container>
    );
}
