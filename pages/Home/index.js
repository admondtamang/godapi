import { Col, Row } from "antd";
import { signIn } from "next-auth/client";
import History from "./History";
import Request from "./Request";
import Response from "./Response";

export default function Home() {
    return (
        <>
            <button onClick={signIn}>Signin</button>
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
