import styled from "styled-components";
const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
`;

const Heading = styled.div`
    display: flex;
    gap: 0.4em;
`;
export default function TitleContainer({ title, icon, children }) {
    return (
        <Container>
            <Heading>
                <box-icon name="rocket"></box-icon>
                <h4>{title}</h4>
            </Heading>
            {children}
        </Container>
    );
}
