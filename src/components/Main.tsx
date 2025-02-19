import { CardsList } from "./CardsList";
import { HeaderContainer } from "../styles";

export function Main() {
    return (
        <main>
            <HeaderContainer>
                <h1>Pokemon Cards</h1>
            </HeaderContainer>
            <div>
                <CardsList />
            </div>
        </main>
    )
}