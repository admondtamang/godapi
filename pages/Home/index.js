import { Col, Row } from "antd";
import History from "./History";
import Request from "./Request";
import Response from "./Response";

export default function Home() {
    return (
        <Row gutter={[16, 16]}>
            <Col xl={12}>
                <Request />

                <History />
            </Col>
            <Col xl={12}>
                <Response />
            </Col>
        </Row>
    );
}
