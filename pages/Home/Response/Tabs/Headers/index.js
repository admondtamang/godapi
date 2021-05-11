import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
const DynamicReactJson = dynamic(import("react-json-view"), { ssr: false });

export default function Headers() {
    const request = useSelector((state) => state.request);
    const { status, data } = request;
    console.log(data);
    return <div>{status === "loading" ? "loading " : <DynamicReactJson src={{ ...data.headers, ...data.config }} />}</div>;
}
