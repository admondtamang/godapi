import { Button } from "@chakra-ui/button";
import { Col, Row } from "antd";
import { signOut, useSession } from "next-auth/client";
import History from "./History";
import Request from "./Request";
import Response from "./Response";
import styled from "styled-components";
import { PoweroffOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";

export default function Home() {
    const [session] = useSession();

    return (
        <>
            {session && (
                <Header>
                    <UserInfo>
                        <Avatar name={session.user.name} src={session.user.image} />
                        <h3>Hey, {session.user.name}</h3>
                    </UserInfo>
                    <Button leftIcon={<PoweroffOutlined />} colorScheme="red" onClick={() => signOut()}>
                        Logout
                    </Button>
                </Header>
            )}

            <Row gutter={[16, 16]}>
                <Col xl={12}>
                    <Request />

                    <History />
                </Col>
                <Col xl={12}>
                    <Response />
                </Col>
            </Row>
        </>
    );
}

const Header = styled.header`
    display: flex;
    padding-bottom: 1rem;
    gap: 0.5rem;
    justify-content: flex-end;
`;
const UserInfo = styled.div`
    display: flex;
    gap: 0.3rem;
    align-items: center;
    h3 {
        font-weight: bold;
    }
`;
