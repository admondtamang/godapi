import TitleContainer from "../../../components/TitleConatiner";
import { HistoryOutlined } from "@ant-design/icons";
import HistoryItem from "./HistoryItem";

export default function History() {
    return (
        <TitleContainer title="History" style={{ marginTop: "1rem" }} icon={<HistoryOutlined />}>
            <HistoryItem url="http://dummy.restapiexample.com/api/v1/employees" date="9:00 AM" />
        </TitleContainer>
    );
}
