import { Col, Row } from "antd";
import styled from "styled-components";

const Nav = styled(Col)`
    background-color: #aaa;
`;

const APIConatiner = styled(Col)`
    /* flex-basis: 70%; */
`;
export default function Navigation({ children }) {
    return (
        <Row>
            <Nav span={4}>navb</Nav>
            <APIConatiner span={20}>{children} </APIConatiner>
        </Row>
    );
}
