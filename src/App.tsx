import { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'
import GameOver from './components/GameOver'
import './App.css'
import { WINNING_COMBINATIONS } from './assets/conditions/winning-combinations'

const initialGameBoard: any = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveActivePlayer(gameTurns: any) {
  let currentPlayer = 'X'
  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer
}

function App() {
  // const [currentPlayer, setCurrentPlayer] = useState<string>('X');
  const [gameTurns, setGameTurns] = useState<any>([]);

  const currentPlayer = deriveActivePlayer(gameTurns)

  let gameBoard = [...initialGameBoard.map((array: any[]) => [...array])]

  for(const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;
      gameBoard[row][col] = player
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner

  function handleSelectSquare(rowIndex: number, colIndex: number) {
    setGameTurns((prevTurns: any) => {
      const currentPlayer = deriveActivePlayer(prevTurns)

      const updatedTurns = [{
        square: {row: rowIndex, col: colIndex}, player: currentPlayer
      }, ...prevTurns]
      return updatedTurns
    })
  }

  const handleRestart = () => {
    setGameTurns([])
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player name='Player 1' symbol='X' isActive={currentPlayer==='X'} />
          <Player name='player 2' symbol='O' isActive={currentPlayer==='O'} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} handleRestart={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
