import { Container, Content } from "./style/card-style"

interface Props {
    name: string
}

export function Card({ name }: Props) {
    return (
        <Container>
            <Content>
                <img src="" alt="" />
                <h1>{name}</h1>
                <p></p>
            </Content>
        </Container>
    )
}