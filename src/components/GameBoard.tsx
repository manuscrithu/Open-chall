const initialGameBoard: any = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

interface GameBoardProps {
    onSelectSquare: (rowIndex: number, colindex: number) => any,
    turns: []
}

export default function GameBoard({ onSelectSquare, turns }: GameBoardProps) {
    let gameBoard = initialGameBoard

    for(const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player
    }

    // const [gameBoard, setGameBoard] = useState(initialGameBoard)

    // const hanldeSelectSquare = (rowIndex: number, colIndex: number) => {
    //     setGameBoard((prevGameBoard: any) => {
    //         const updatedGameBoard = [...prevGameBoard.map(((innerArray: any) =>[...innerArray]))];
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedGameBoard
    //     })

    //     onSelectSquare()
    // }

    return(
        <ol id="game-board">
            {
                gameBoard.map((row: string|any, rowIndex: any) => <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol: string|any, colIndex: any) => <li key={colIndex}><button onClick={
                            () => onSelectSquare(rowIndex, colIndex)
                            }>{playerSymbol}</button></li>)}
                    </ol>
                </li>)
            }
        </ol>
    )
}