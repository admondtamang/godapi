import styled from "styled-components";

const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    gap: 1rem;
    border-radius: 10px;
    min-height: 32rem;
`;

const Heading = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5em;
`;

export default function TitleContainer({ title, icon, children, ...rest }) {
    return (
        <Container {...rest}>
            <Heading>
                {icon}
                <b>{title}</b>
            </Heading>
            {children}
        </Container>
    );
}
