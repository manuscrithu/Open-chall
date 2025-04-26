interface GameBoardProps {
    onSelectSquare: (rowIndex: number, colindex: number) => any,
    board: any[]
}

export default function GameBoard({ onSelectSquare, board }: GameBoardProps) {

    return(
        <ol id="game-board">
            {
                board.map((row: string|any, rowIndex: any) => <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol: string|any, colIndex: any) => <li key={colIndex}><button disabled={playerSymbol !== null} onClick={
                            () => onSelectSquare(rowIndex, colIndex)
                            }>{playerSymbol}</button></li>)}
                    </ol>
                </li>)
            }
        </ol>
    )
}