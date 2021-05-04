import React from "react";
import styled from "styled-components";

export default function SecondaryButton({ color, background, name, prefix, square, ...rest }) {
    const SecondaryButton = styled.span`
        padding: 0.5rem 1rem;
        font-weight: bold;
        color: ${color};
        background-color: ${background};
        border-radius: 5px;
        display: flex;
        ${({ button }) =>
            button &&
            `
            text-ailgn:center;
                cursor: pointer;
                &:hover {
                    opacity: 0.8;
                }
                `}
    `;

    return (
        <SecondaryButton {...rest}>
            {prefix}
            {square ? <br /> : " "}
            {name}
        </SecondaryButton>
    );
}
