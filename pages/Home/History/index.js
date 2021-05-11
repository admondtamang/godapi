import TitleContainer from "../../../components/TitleConatiner";
import { HistoryOutlined } from "@ant-design/icons";
import HistoryItem from "./HistoryItem";
import { useSelector } from "react-redux";

export default function History() {
    const histories = useSelector((state) => state.history.data);
    return (
        <TitleContainer title="History" style={{ marginTop: "1rem" }} icon={<HistoryOutlined />}>
            {histories.map((item, i) => (
                <HistoryItem history={item} key={i} />
            ))}
        </TitleContainer>
    );
}
