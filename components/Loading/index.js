import LottieFile from "../LottieFile";
import Load from "./loading.json";

export default function Loading() {
    return <LottieFile animationData={Load} width="600px" height="300px" />;
}
