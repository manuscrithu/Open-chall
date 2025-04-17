import Player from './components/Player'
import './App.css'

function App() {

  return (
    <main>
      <div id='game-container'>
        <ul id='players'>
          <Player name='Click edit' symbol='' />
          <Player name='Click edit' symbol='' />
        </ul>
      </div>
    </main>
  )
}

export default App
