import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Container } from "./style/cardslist-style";

interface ICard {
    id: number
    name: string
}

export function CardsList () {

    const [cards, setCards] = useState<ICard[]>([])

    async function getAllPosts() {
        await fetch('https://pokeapi.co/api/v2/pokemon')
        .then(results => results.json())
        .then(json => setCards(json.results))
    }

    useEffect(() => {
        getAllPosts()
    }, [])

    return (
        <Container>
            {cards.map(({id, name}) => (
                <div key={id}>
                    <Card name={name}/>
                </div>
            ))}
        </Container>
    )
}