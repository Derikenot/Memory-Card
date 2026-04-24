import './styles/index.scss'
import {Header} from "./components/Header";
import {GameBoard} from "./components/GameBoard";
import {useGameLogic} from "./hooks/useGameLogic.ts";


function App() {

    const {cards, handleCardClick, flippedCardsId, matchedCardsId, moves, score ,handleNewGameButtonClick} = useGameLogic()

    return (
    <>
        <Header
            moves={moves}
            score={score}
            onClick={handleNewGameButtonClick}

        />
        <GameBoard
            cards={cards}
            onClick={handleCardClick}
            flippedCardsId={flippedCardsId}
            matchedCardsId={matchedCardsId}
        />
    </>
  )
}

export default App
