import { Container, Content } from "./style/card-style"

interface Props {
    name: string
}

export function Card({ name }: Props) {
    return (
        <Container>
            <Content>
                <h1>{name}</h1>
                <img src="" alt="" />
                <p></p>
            </Content>
        </Container>
    )
}