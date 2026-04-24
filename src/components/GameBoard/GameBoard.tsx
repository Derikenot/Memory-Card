import styles from "./GameBoard.module.scss"
import {Card} from "../Card";
import {type Card as CardType} from "../../hooks/useCard.ts";

type GameBoardProps = {
    cards: CardType[]
    onClick: (id:string) => void
    flippedCardsId: string[]
    matchedCardsId: string[]
}

export function GameBoard({cards, onClick, flippedCardsId ,matchedCardsId}:GameBoardProps){

    return(
        <ul className={styles.cardsList}>
            {cards.map((card) => {

                return <li key={card.id}>
                    <Card
                        card={card}
                        onClick={onClick}
                        isFlipped={flippedCardsId.includes(card.id)}
                        isMatched={matchedCardsId.includes(card.id)}
                    />
                </li>
            })}
        </ul>
    )
}