//Перемешивает игральные карты

export function shuffleCards(cards:string[]){

    const sortedCards = [...cards]

    for (let i: number = sortedCards.length - 1; i > 0; i--){
        const randomIndex = Math.floor(Math.random() * (i + 1));

        [sortedCards[i], sortedCards[randomIndex]] = [sortedCards[randomIndex], sortedCards[i]]
    }

    return sortedCards

}