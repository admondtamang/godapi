import Lottie from "react-lottie";
import styled from "styled-components";
export default function LottieFile({ animationData, width, height, message }) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <Container>
            <Lottie options={defaultOptions} height={height || 200} width={width || 200} />
            <b style={{ textAlign: "center" }}>{message}</b>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
