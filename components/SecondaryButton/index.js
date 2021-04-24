import React from "react";
import styled from "styled-components";

export default function SecondaryButton({ color, background, name, prefix, square, ...rest }) {
    const SecondaryButton = styled.span`
        padding: 0.5rem 1rem;
        font-weight: bold;
        color: ${color};
        background-color: ${background};
        border-radius: 5px;
    `;

    return (
        <SecondaryButton {...rest}>
            {prefix}
            {square ? <br /> : " "}
            {name}
        </SecondaryButton>
    );
}
