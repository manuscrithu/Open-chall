type GameOverProps = {
    winner: any,
    handleRestart: () => void
}

export default function GameOver({ winner, handleRestart }: GameOverProps) {
    return(
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner} Won!</p>}
            {!winner && <p>It's draw!</p>}
            <p>
                <button onClick={handleRestart}>Rematch</button>
            </p>
        </div>
    )
}