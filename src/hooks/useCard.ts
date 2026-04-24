import {useEffect, useState} from "react";
import {shuffleCards} from "../functions/shuffleCards.ts";

export type Card = {
    id: string
    value: string
}

export function useCard(gameId:number){
    const cardsValues = [
        '🚗',
        '✈️',
        '⭐',
        '🌈',
        '🍎',
        '🍕',
        '⚽',
        '🎸',
        '🚗',
        '✈️',
        '⭐',
        '🌈',
        '🍎',
        '🍕',
        '⚽',
        '🎸',
    ]

    const [cards, setCards] = useState<Card[]>([])

    useEffect(() => {
        const sortedCardValues = shuffleCards(cardsValues)
        const sortedCards = sortedCardValues.map((value) => {
            return {
                id: crypto.randomUUID(),
                value: value
            }
        })

        setCards(sortedCards)
    }, [gameId]);

    return {cards}
}
