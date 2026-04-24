import styles from './Card.module.scss'
import {type Card} from "../../hooks/useCard.ts";

type CardProps = {
    card: Card
    onClick: (id: string) => void
    isFlipped: boolean
    isMatched: boolean
}

export function Card({card, onClick, isFlipped, isMatched}:CardProps){

    const {id, value} = card

    return(
        <div
            className={`${styles.card} ${isFlipped ? styles.IsFlipped : ''} ${isMatched ? styles.IsMatched : ''}`}
            onClick={() => onClick(id)}
        >
            <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                    {value}
                </div>

                <div className={styles.cardBack}>
                    ?
                </div>
            </div>
        </div>
    )
}
