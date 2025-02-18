import { CardsList } from "./CardsList";
import { HeaderContainer } from "../styles";

export function Main() {
    return (
        <main>
            <HeaderContainer>
                <h1>Blog React</h1>
            </HeaderContainer>
            <div>
                <CardsList />
            </div>
        </main>
    )
}