import { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'
import './App.css'

function App() {
  const [currentPlayer, setCurrentPlayer] = useState<string>('X');
  const [gameTurns, setGameTurns] = useState<any>([]);

  function handleSelectSquare(rowIndex: number, colIndex: number) {
    setCurrentPlayer((currentPlayer) => currentPlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevTurns: any) => {
      let currentPlayer = 'X'
      if(prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O'
      }
      const updatedTurns = [{
        square: {row: rowIndex, col: colIndex}, player: currentPlayer
      }, ...prevTurns]
      return updatedTurns
    })
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player name='Player 1' symbol='X' isActive={currentPlayer==='X'} />
          <Player name='player 2' symbol='O' isActive={currentPlayer==='O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log />
    </main>
  )
}

export default App
