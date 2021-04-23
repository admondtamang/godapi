import styled from "styled-components";

const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 10px;
`;

const Heading = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5em;
`;

export default function TitleContainer({ title, icon, children }) {
    return (
        <Container>
            <Heading>
                {icon}
                <span>{title}</span>
            </Heading>
            {children}
        </Container>
    );
}
