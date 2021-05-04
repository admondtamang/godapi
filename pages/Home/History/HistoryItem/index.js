import SecondaryButton from "../../../../components/SecondaryButton";
import styled from "styled-components";

export default function HistoryItem({ history }) {
    console.log(history);
    const {
        config: { url, method },
        status,
    } = history;
    return (
        <Container>
            <SecondaryButton prefix="Status" name={status} color="green" background="lightgreen" square />
            <Detail>
                <b>{url}</b>
                <b style={{ color: "grey" }}>9:00 AM</b>
            </Detail>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    gap: 1em;
    cursor: pointer;
    /* padding: 5px; */
    &:hover {
        opacity: 0.8;
    }
`;

const Detail = styled.div`
    display: flex;
    flex-direction: column;
`;
