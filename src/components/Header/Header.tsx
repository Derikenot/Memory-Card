import styles from "./Header.module.scss"


type HeaderProps = {
    moves: number
    score: number
    onClick: () => void
}

export function Header({moves, score, onClick}: HeaderProps){

    return(
        <header className={styles.header}>
            <h1 className={styles.headerTitle}>
                Memory Card Game
            </h1>

            <div className={styles.headerStats}>
                <div className={styles.headerStatsItem}>
                    <span className={styles.headerStatsLabel}>Score:</span>
                    <span className={styles.headerStatsValue}>{score}</span>
                </div>
                <div className={styles.headerStatsItem}>
                    <span className={styles.headerStatsLabel}>Moves:</span>
                    <span className={styles.headerStatsValue}>{moves}</span>
                </div>
            </div>
            
            <button
                className={styles.headerRestartButton}
                type="button"
                onClick={() => onClick()}
            >
                New Game
            </button>
        </header>
    )
}