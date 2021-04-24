import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
const DynamicReactJson = dynamic(import("react-json-view"), { ssr: false });

export default function Result() {
    const request = useSelector((state) => state.request);
    const { status, data } = request;
    return <div>{status === "loading" ? "loading " : <DynamicReactJson src={data.data} />}</div>;
}
