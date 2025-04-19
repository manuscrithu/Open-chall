import Player from './components/Player'
import GameBoard from './components/GameBoard'
import './App.css'

function App() {

  return (
    <main>
      <div id='game-container'>
        <ul id='players'>
          <Player name='Player 1' symbol='X' />
          <Player name='player 2' symbol='O' />
        </ul>
        <GameBoard />
      </div>
    </main>
  )
}

export default App
