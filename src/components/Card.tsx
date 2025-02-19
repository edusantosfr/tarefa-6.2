import { Container, Content, CardHeader, PSContainer, CardBody, CardFooter, FooterText } from "./style/card-style"
import CardImage from "./style/assets/card-picture.png"

interface Props {
    name: string
}

export function Card({ name }: Props) {
    return (
        <Container>
            <Content>
                <CardHeader>
                    <h1>{name}</h1>
                    <PSContainer>
                        <p>ps</p>
                        <h2>60</h2>
                    </PSContainer>
                </CardHeader>
                <img src={CardImage} alt="imagem de pokemon" />
                <CardBody>
                    <h3>★ Espiral de Defesa</h3>
                    <p>Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques.</p>
                    <h3>★★ Golpe de Colisão 50</h3>
                </CardBody>
                <CardFooter>
                    <FooterText>
                        <h4>Official <br /> Pokemon Cards</h4>
                        <p>Quando está em apuros, <br /> (?) tende a descarregar uma carga elétrica <br /> para espantar seus oponentes.</p>
                    </FooterText>
                </CardFooter>
            </Content>
        </Container>
    )
}