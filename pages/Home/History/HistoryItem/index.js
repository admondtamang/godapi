import SecondaryButton from "../../../../components/SecondaryButton";
import styled from "styled-components";

export default function HistoryItem({ url, date }) {
    return (
        <Container>
            <SecondaryButton prefix="Status" name="200 OK" color="green" background="lightgreen" square />
            <Detail>
                <b>{url}</b>
                <b style={{ color: "grey" }}>{date}</b>
            </Detail>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    gap: 1em;
    /* padding: 5px; */
    &:hover {
        background: grey;
    }
`;

const Detail = styled.div`
    display: flex;
    flex-direction: column;
`;
