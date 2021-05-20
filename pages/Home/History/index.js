import TitleContainer from "../../../components/TitleConatiner";
import { HistoryOutlined } from "@ant-design/icons";
import HistoryItem from "./HistoryItem";
import { useSelector } from "react-redux";
import LottieFile from "../../../components/LottieFile";
import animateData from "../../../assets/lottie/no-data.json";

export default function History() {
    const histories = useSelector((state) => state.history.data);
    return (
        <TitleContainer title="History" style={{ marginTop: "1rem" }} icon={<HistoryOutlined />}>
            {histories.length === 0 ? (
                <LottieFile animationData={animateData} height="300px" width="200px" />
            ) : (
                histories.map((item, i) => <HistoryItem history={item} key={i} />)
            )}
        </TitleContainer>
    );
}
