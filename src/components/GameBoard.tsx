import { useState } from "react"

const initialGameBoard: any = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    const hanldeSelectSquare = (rowIndex: number, colIndex: number) => {
        setGameBoard((prevGameBoard: any) => {
            const updatedGameBoard = [...prevGameBoard.map(((innerArray: any) =>[...innerArray]))];
            updatedGameBoard[rowIndex][colIndex] = 'X';
            return updatedGameBoard
        })
    }

    return(
        <ol id="game-board">
            {
                gameBoard.map((row: string|any, rowIndex: any) => <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol: string|any, colIndex: any) => <li key={colIndex}><button onClick={
                            () => hanldeSelectSquare(rowIndex, colIndex)
                        }>{playerSymbol}</button></li>)}
                    </ol>
                </li>)
            }
        </ol>
    )
}