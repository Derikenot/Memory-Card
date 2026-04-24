import {useCard} from "./useCard.ts";
import {useEffect, useState} from "react";
import {TOTAL_CARDS, FLIP_DELAY} from "../config/gameConfig.ts";

export function useGameLogic(){
    const [gameId, setGameId] = useState<number>(0)
    const {cards} = useCard(gameId)

    const [flippedCardsId, setFlippedCardsId] = useState<string[]>([])
    const [matchedCardsId, setMatchedCardsId] = useState<string[]>([])
    const [moves, setMoves] = useState<number>(0)
    const [score, setScore] = useState<number>(0)

    const isBlocked = flippedCardsId.length === 2

    const handleCardClick = (cardId:string) => {
        if (isBlocked){
            return
        }

        if (!flippedCardsId.includes(cardId)){
            setFlippedCardsId(prev => [...prev, cardId])
        }
    }
    const handleNewGameButtonClick = () => {
        setFlippedCardsId([])
        setMatchedCardsId([])
        setMoves(0)
        setGameId(prev => prev + 1)
    }

    useEffect(() => {
        if (flippedCardsId.length !=2) return

        const [firstFlippedCardId, secondFlippedCardId] = flippedCardsId

        const firstFlippedCard = cards.find((card) => card.id === firstFlippedCardId)
        const secondFlippedCard = cards.find((card) => card.id === secondFlippedCardId)

        let timeoutId:ReturnType<typeof setTimeout>

        if (firstFlippedCard?.value === secondFlippedCard?.value){
            setMatchedCardsId(prev => [...prev, firstFlippedCardId, secondFlippedCardId])
            setFlippedCardsId([])
            setMoves(prev => prev + 1)
        }
        else {
            timeoutId = setTimeout(() => {
                setFlippedCardsId([])
                setMoves(prev => prev + 1)
            }, FLIP_DELAY)
        }

        return () => clearTimeout(timeoutId)


    }, [flippedCardsId, cards]);
    useEffect(() => {
        if (matchedCardsId.length != TOTAL_CARDS) return

        setScore(prev => prev + 1)
    }, [matchedCardsId]);

    return {handleCardClick, cards, flippedCardsId, matchedCardsId, moves, score, handleNewGameButtonClick, gameId}
}